import { Component, OnInit } from '@angular/core';
import { validateEventsArray } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormhandlerService } from '../formhandler.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  form2 = this.fb.group({
    admission_year:['',Validators.required],
    passing_year:['',Validators.required],
    drop_year:['',Validators.required],
    course:['',Validators.required],
    branch:['',Validators.required],
    curr_sem:['',Validators.required],
    entry_level:['',Validators.required],
    total_backlog :['',Validators.required],
    active_backlog:['',Validators.required],
    fail_year:['',Validators.required],
    minor_training:['',Validators.required],
    minor_project:['',Validators.required],
    major_training:['',Validators.required],
    major_project:['',Validators.required],
    curr_cgpa:['',Validators.required],
    sem1_sgpa:[0],
    sem1_total_credit:[0],
    sem1_earned_credit:[0],
    sem2_sgpa:[0],
    sem2_total_credit:[0],
    sem2_earned_credit:[0],
    sem3_sgpa:[0],
    sem3_total_credit:[0],
    sem3_earned_credit:[0],
    sem4_sgpa:[0],
    sem4_total_credit:[0],
    sem4_earned_credit:[0],
    sem5_sgpa:[0],
    sem5_total_credit:[0],
    sem5_earned_credit:[0],
    sem6_sgpa:[0],
    sem6_total_credit:[0],
    sem6_earned_credit:[0],
    sem7_sgpa:[0],
    sem7_total_credit:[0],
    sem7_earned_credit:[0],
    sem8_sgpa:[0],
    sem8_total_credit:[0],
    sem8_earned_credit:[0]
  })
  semarray=[];
  local:any;
  session:any;
  constructor(private fb:FormBuilder,private handler: FormhandlerService,private router: Router) {
    this.local = window.localStorage;
    this.session = window.sessionStorage;
   }

  ngOnInit(): void {
    let token = JSON.parse(this.session.getItem('token'));
    this.form2.patchValue(token);
    let data = JSON.parse(this.local.getItem('form2'));
    if(data)
    {
      this.form2.patchValue(data)
    }
    if(this.form2.value.curr_sem!==0)
    {
      this.addarray()
    }
  }
  addarray(){
    //this.semarray=[]
    let n:number=this.form2.value.curr_sem
    this.semarray =[]
    for(let i=0;i<n;i++)
    {
      this.semarray.push(i);
    }
    //console.log(this.semarray)
  }

  submit(){
      this.handler.merge(this.form2.value);
      this.handler.form2.next(true);
      this.local.setItem('form2',JSON.stringify(this.form2.value))
      this.router.navigateByUrl('/profile/fillform/form3')
  }
}
