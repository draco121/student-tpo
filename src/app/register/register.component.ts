import { AfterViewInit, Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { CustomValidators } from '../CustomValidators/CustomValidators';
import { batch } from '../model.interface';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit, DoCheck {

  register = this.fb.group({
    fname: ['', Validators.required],
    mname: [''],
    lname: ['', Validators.required],
    rollno: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    branch: ['', Validators.required],
    batch: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
    phoneotp: [''],
    password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    cpassword: ['', [Validators.required,]]
  }, { validators: this.validate.passmatch })

  db: CollectionReference;
  isphoneotpsent = false;
  isemailotpsent = false;
  isphoneotpverified = false;
  isemailotpverified = false;
  local = window.localStorage;
  alert = '';
  isforminvalid = true;
  batches: batch;

  constructor(private fb: FormBuilder,
    private afs: AngularFirestore,
    private validate: CustomValidators,
    private afa: AngularFireAuth) {

  }


  ngDoCheck(): void {
    let p = this.local.getItem('emailverified')
    if (p === '1') {
      this.isemailotpverified = true;
      this.local.removeItem('emailverified');
    }

  }

  ngAfterViewInit(): void {
    window['recaptcha'] = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible'
    });
  }



  get fname() {
    return this.register.get('fname')
  }
  get lname() {
    return this.register.get('lname')
  }
  get rollno() {
    return this.register.get('rollno')
  }
  get email() {
    return this.register.get('email')
  }
  get batch() {
    return this.register.get('batch')
  }
  get branch() {
    return this.register.get('branch')
  }
  get phone() {
    return this.register.get('phone')
  }
  get password() {
    return this.register.get('password')
  }
  get cpassword() {
    return this.register.get('cpassword')
  }

  ngOnInit() {
    this.db = this.afs.collection('collections').ref;
    this.db.doc('student-record').get().then(doc => {
      if (doc.exists) {
        this.batches = <batch>doc.data();
        console.log(this.batches)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  sendotp() {
    this.afa.signInWithPhoneNumber(this.register.value.phone, window['recaptcha'])
      .then(confirmationResult => {
        window['confirmationResult'] = confirmationResult;
        this.isphoneotpsent = true;
      }).catch(err => {
        this.alert = 'unknown error occured'
      })
  }



  verifyotp() {
    let confirmationResult = window['confirmationResult']
    confirmationResult.confirm(this.register.value.phoneotp).then(res => {
      this.isphoneotpverified = true;
    }).catch(err => {
      console.log(err)
      this.alert = 'unknown error occured'
    })
  }



  sendemailotp() {
    const actionCodeSettings = {
      // Your redirect URL
      url: 'http://localhost:4200/verifyemail',
      handleCodeInApp: true,
    };
    this.afa.sendSignInLinkToEmail(this.register.value.email, actionCodeSettings)
      .then(confirmationResult => {
        this.local.setItem('email', this.register.value.email)
        this.isemailotpsent = true;
      }).catch(err => {
        console.log(err)
        this.alert = 'unknown error occured'
      })
  }




  Submit() {
    this.db = this.afs.collection(this.register.value.batch).ref
    let id: string = this.register.value.rollno
    this.db.doc(id.toUpperCase()).get().then(doc => {
      if (doc.exists) {
        this.alert = 'doc already exists'
      } else {
        this.db.doc(id.toUpperCase()).set(this.register.value).then(res => {
          //window.alert('registration successfull')
          console.log('regitration successfull')
        }).catch(err => {
          console.log(err)
        })
      }
    }).catch(err => {
      console.log(err)
    });

  }

  formcheck(): boolean {
    if (this.register.invalid)
      return true;
    else {
      if (this.isphoneotpverified && this.isemailotpverified)
        return false;
      else return true;
    }
  }









}
