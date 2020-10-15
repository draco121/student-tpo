import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { FormBuilder, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import { CustomValidators } from '../CustomValidators/CustomValidators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private fb:FormBuilder,
    private afs: AngularFirestore,
    private validate: CustomValidators,
    private afa: AngularFireAuth)
  {
    this.db = this.afs.collection('student').ref
    window['recaptcha'] = new firebase.auth.RecaptchaVerifier('recaptcha',{
      size :'invisible'
    });
  }
  register = this.fb.group({
    fname:['',Validators.required],
    mname:[''],
    lname:['',Validators.required],
    rollno:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    branch:['',Validators.required],
    batch:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    cpassword:['',[Validators.required,]]
  },{validators: this.validate.passmatch})
  db: CollectionReference;
  isphoneotpsent=false;
  isemailotpsent=false
  get fname(){
    return this.register.get('fname')
  }
  get lname(){
    return this.register.get('lname')
  }
  get rollno(){
    return this.register.get('rollno')
  }
  get email(){
    return this.register.get('email')
  }
  get batch(){
    return this.register.get('batch')
  }
  get branch(){
    return this.register.get('branch')
  }
  get phone(){
    return this.register.get('phone')
  }
  get password(){
    return this.register.get('password')
  }
  get cpassword(){
    return this.register.get('cpassword')
  }

  ngOnInit(){
  }

  sendphoneotp(){
    this.afa.signInWithPhoneNumber(this.register.value.phoneno,window['recaptcha']).
    then((confirmationResult)=>{
      this.isphoneotpsent=true;
      window['confirmationresult'] = confirmationResult
    }).catch(err=>{
        console.log(err)
    })

  }
  sendemailotp(){
    this.afa.(this.register.value.phoneno,window['recaptcha']).
    then((confirmationResult)=>{
      this.isemailotpsent=true;
      window['confirmationresult'] = confirmationResult
    }).catch(err=>{
        console.log(err)
    })
      
  }

  onSubmit() {
    let id:string = this.register.value.rollno
      this.db.doc(id.toUpperCase()).set(this.register.value).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }









}
