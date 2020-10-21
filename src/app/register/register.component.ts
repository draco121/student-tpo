import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AdmincontrolService } from '../controller/admincontrol.service';
import { CustomValidators } from '../CustomValidators/CustomValidators';
import { ErrorlogService } from '../errorlog.service';
import { batch } from '../model.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit, DoCheck {
  register = this.fb.group(
    {
      fname: ['', Validators.required],
      mname: [''],
      lname: ['', Validators.required],
      rollno: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      branch: ['', Validators.required],
      batch: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15),
        ],
      ],
      phoneotp: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
        ],
      ],
      cpassword: ['', [Validators.required]],
      isblacklisted: false,
      isverified: false,
      ismainformsubmitted: false,
      isuploadformsubmitted: false,
      master_lock: false,
      secondary_lock: false,
    },
    { validators: this.validate.passmatch }
  );

  db: CollectionReference;
  isphoneotpsent = false;
  isemailotpsent = false;
  isphoneotpverified = false;
  isemailotpverified = false;
  local = window.localStorage;
  alert = '';
  isforminvalid = true;
  activecollectins: string[];
  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private validate: CustomValidators,
    private afa: AngularFireAuth,
    private ac: AdmincontrolService,
    private er: ErrorlogService
  ) {
    this.ac
      .getactivecollections()
      .then((a) => {
        this.activecollectins = a;
      })
      .catch((err) => {
        this.er.log(err);
      });
  }

  ngDoCheck(): void {
    try {
      let p = this.local.getItem('emailverified');
      if (p === '1') {
        this.isemailotpverified = true;
        this.local.removeItem('emailverified');
      }
    } catch (err) {
      this.er.log(err);
    }
  }

  ngAfterViewInit(): void {
    try {
      window['recaptcha'] = new firebase.auth.RecaptchaVerifier('recaptcha', {
        size: 'invisible',
      });
    } catch (err) {
      this.er.log(err);
    }
  }

  get fname() {
    return this.register.get('fname');
  }
  get lname() {
    return this.register.get('lname');
  }
  get rollno() {
    return this.register.get('rollno');
  }
  get email() {
    return this.register.get('email');
  }
  get batch() {
    return this.register.get('batch');
  }
  get branch() {
    return this.register.get('branch');
  }
  get phone() {
    return this.register.get('phone');
  }
  get password() {
    return this.register.get('password');
  }
  get cpassword() {
    return this.register.get('cpassword');
  }

  ngOnInit() {}

  sendotp() {
    try {
      this.afa
        .signInWithPhoneNumber(
          '+91' + this.register.value.phone,
          window['recaptcha']
        )
        .then((confirmationResult) => {
          window['confirmationResult'] = confirmationResult;
          this.isphoneotpsent = true;
        })
        .catch((err) => {
          this.alert = 'unknown error occured';
          this.er.log(err);
        });
    } catch (err) {
      this.er.log(err);
    }
  }

  verifyotp() {
    try {
      let confirmationResult = window['confirmationResult'];
      confirmationResult
        .confirm(this.register.value.phoneotp)
        .then((res) => {
          this.isphoneotpverified = true;
        })
        .catch((err) => {
          this.alert = 'unknown error occured';
          this.er.log(err);
        });
    } catch (err) {
      this.er.log(err);
    }
  }

  sendemailotp() {
    try {
      const actionCodeSettings = {
        // Your redirect URL
        url: 'http://localhost:4200/verifyemail',
        handleCodeInApp: true,
      };
      this.afa
        .sendSignInLinkToEmail(this.register.value.email, actionCodeSettings)
        .then((confirmationResult) => {
          this.local.setItem('email', this.register.value.email);
          this.isemailotpsent = true;
        })
        .catch((err) => {
          this.alert = 'unknown error occured';
          this.er.log(err);
        });
    } catch (err) {
      this.er.log(err);
    }
  }

  Submit() {
    try {
      this.db = this.afs.collection(this.register.value.batch).ref;
      let id: string = this.register.value.rollno;
      this.db
        .doc(id.toUpperCase())
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.alert = 'doc already exists';
          } else {
            this.db
              .doc(id.toUpperCase())
              .set(this.register.value)
              .then((res) => {
                window.alert('registration successfull');
              })
              .catch((err) => {
                this.er.log(err);
              });
          }
        })
        .catch((err) => {
          this.er.log(err);
        });
    } catch (err) {
      this.er.log(err);
    }
  }

  formcheck(): boolean {
    try {
      if (this.register.invalid) return true;
      else {
        if (this.isphoneotpverified && this.isemailotpverified) return false;
        else return true;
      }
    } catch (err) {
      this.er.log(err);
    }
  }
}
