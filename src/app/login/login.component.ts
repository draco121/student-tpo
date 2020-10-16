import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { batch } from '../model.interface';

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
    this.local = window.sessionStorage;
   }

  loginform = this.fb.group({
    rollno: ['', Validators.required],
    password: ['', Validators.required]
  })
  batch='';
  alert: String = null;
  local: Storage
  db :CollectionReference;
  batches: batch
  ngOnInit(): void {
    let token = this.local.getItem('token');
    if(token){
      this.router.navigate(['profile'])
    }else{
        this.db = this.afs.collection('collections').ref;
        this.db.doc('student-record').get().then(doc=>{
          if(doc.exists){
            this.batches = <batch>doc.data()
          }
        })
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
