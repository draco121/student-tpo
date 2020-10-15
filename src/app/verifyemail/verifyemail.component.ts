import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss']
})
export class VerifyemailComponent implements OnInit {

  constructor(private afa: AngularFireAuth,) { }
  alert =''
  ngOnInit(): void {
    let url = window.location.href

    if(this.afa.isSignInWithEmailLink(url))
    {
      let email = window.localStorage.getItem('email')
      if(!email)
      {
        email = window.prompt('please provide email for verification');
      }else{
        this.afa.signInWithEmailLink(email,url).then(res=>{
          this.alert= 'verified'
          window.localStorage.setItem('emailverified','1')
          window.localStorage.removeItem('email')
        }).catch(err=>{
          console.log(err)
          this.alert = err;
        })
      }
    }
  }

}
