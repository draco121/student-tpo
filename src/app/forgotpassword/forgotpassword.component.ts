import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { AdmincontrolService } from '../controller/admincontrol.service';
import { batch, student } from '../model.interface';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  isotpsent = false;
  isotpverified = false;
  phoneno: string;
  code: any;
  confirmationResult: any;
  alert: any;
  db: CollectionReference;
  recordpresent: boolean = false;
  doc: student;
  rollno: string;
  password: string;
  batch: string;
  activecollections: string[];
  constructor(private fb: FormBuilder,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ac: AdmincontrolService) {
    this.ac.getactivecollections().then(a => {
      this.activecollections = a;
    })
  }
  ngAfterViewInit(): void {
    window['recaptcha'] = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible'
    });
  }


  ngOnInit(): void {
    //firebase.initializeApp(environment.firebaseConfig)
  }
  getdoc() {
    this.db = this.afs.collection(this.batch).ref;
    let id = this.rollno.toUpperCase();
    this.db.doc(id).get().then(doc => {
      if (doc.exists) {
        this.recordpresent = true;
        this.doc = <student>doc.data();
      } else {
        this.alert = "invalid enrollment number"
      }
    }).catch(err => {
      this.alert = 'unknown error occured'
    })
  }

  sendotp() {
    this.afa.signInWithPhoneNumber('+91'+this.doc.phone, window['recaptcha']).
      then((confirmationResult) => {
        this.isotpsent = true;
        window['confirmationresult'] = confirmationResult
      }).catch(err => {
        this.alert = "error occured"
        console.log(err)
      })
  }

  verifyotp() {
    let confirmationResult = window['confirmationresult']
    confirmationResult.confirm(this.code).then((result) => {
      // User signed in successfully.
      this.isotpverified = true;
      // ...
    }).catch(error => {

      this.alert = 'bad verification code'
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }


  setpassword() {
    this.db = this.afs.collection(this.batch).ref;
    let id = this.rollno.toUpperCase();
    this.db.doc(id).update({
      password: this.password
    }).then(doc => {
      window.alert('password changed successfully');
      this.router.navigate(['login']);
    }).catch(err => {
      console.log(err)
      this.alert = 'unknown error occured cannot update password'
    })
  }

}
