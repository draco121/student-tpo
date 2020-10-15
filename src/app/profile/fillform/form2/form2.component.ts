import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormhandlerService } from '../formhandler.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  form2 = this.fb.group({
    admission_year:[''],
    passing_year:[''],
    drop_year:[''],
    course:[''],
    branch:[''],
    curr_sem:[''],
    entry_level:[''],
    total_backlog :[''],
    active_backlog:[''],
    fail_year:[''],
    minor_training:[''],
    minor_project:[''],
    major_training:[''],
    major_project:[''],
    curr_cgpa:[''],
    sem1_sgpa:[''],
    sem1_total_credit:[''],
    sem1_earned_credit:[''],
    sem2_sgpa:[''],
    sem2_total_credit:[''],
    sem2_earned_credit:[''],
    sem3_sgpa:[''],
    sem3_total_credit:[''],
    sem3_earned_credit:[''],
    sem4_sgpa:[''],
    sem4_total_credit:[''],
    sem4_earned_credit:[''],
    sem5_sgpa:[''],
    sem5_total_credit:[''],
    sem5_earned_credit:[''],
    sem6_sgpa:[''],
    sem6_total_credit:[''],
    sem6_earned_credit:[''],
    sem7_sgpa:[''],
    sem7_total_credit:[''],
    sem7_earned_credit:[''],
    sem8_sgpa:[''],
    sem8_total_credit:[''],
    sem8_earned_credit:['']
  })
  semarray=[];
  constructor(private fb:FormBuilder,private handler: FormhandlerService) { }

  ngOnInit(): void {
  }
  addarray(){
    //this.semarray=[]
    let n:number=this.form2.value.curr_sem
    for(let i=0;i<n;i++)
    {
      this.semarray.push(i);
    }
    //console.log(this.semarray)
  }

  submit(){
      this.handler.merge(this.form2.value);
  }

}
