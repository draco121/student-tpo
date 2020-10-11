import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface student{
  fname: string;
  lname: string;
  phoneno: string;
  rollno: string;
  branch: string;
  batch: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private afs: AngularFirestore, private router: Router) {
    this.db = this.afs.collection('student').ref;
    this.local = window.sessionStorage;
   }

  loginform = this.fb.group({
    rollno: ['', Validators.required],
    password: ['', Validators.required]
  })
  alert: String = null;
  local: Storage
  db :CollectionReference;
  ngOnInit(): void {
    let token = this.local.getItem('token');
    if(token){
      this.router.navigate(['profile'])
    }
  }

  login() {
    this.db.doc(this.loginform.value.rollno).get().then(doc =>{
      if(doc.exists)
      {
        let data = <student>doc.data();
        if(data.password==this.loginform.value.password)
        {
          this.local.setItem('token',JSON.stringify(data));
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
