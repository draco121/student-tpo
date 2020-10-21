import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmincontrolService } from '../controller/admincontrol.service';
import { batch, student } from '../model.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private afs: AngularFirestore, private router: Router,
    private ac: AdmincontrolService) {
    this.local = window.sessionStorage;
    this.ac.getactivecollections().then(collections=>{
      this.activecollections = collections
    })
   }

  loginform = this.fb.group({
    rollno: ['', Validators.required],
    password: ['', Validators.required]
  })
  batch='';
  alert: String = null;
  local: Storage
  db :CollectionReference;
  activecollections:string[];
  ngOnInit(): void {
      let token = this.local.getItem('token')
      if(token!=null)
      {
        this.router.navigate(['/profile'])
      }
  }

  login() {
    this.db = this.afs.collection(this.batch).ref;
    let id = this.loginform.value.rollno.toUpperCase()
    this.db.doc(id).get().then(doc =>{
      if(doc.exists)
      {
        let data = <student>doc.data();
        if(data.password==this.loginform.value.password)
        {
          this.local.setItem('token',JSON.stringify(data));
          console.log(data)
          this.router.navigate(['profile'])
        }else{
          this.local.removeItem('token')
          this.alert = "wrong password"
        }

      }else{
        this.alert = "no record found please register"
      }
    }).catch(err=>{
      this.alert ="unknown error occured"
    })
  }


}
