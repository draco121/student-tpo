import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { storage } from 'firebase';
import { student } from 'src/app/model.interface';
import { FormhandlerService } from '../fillform/formhandler.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss']
})
export class UpdateformComponent implements OnInit {

  semarray =[];
  session:Storage;
  token:student;
  updateform = this.fb.group({
    phone:[''],
    email:[''],
    minor_training:[''],
    minor_project:[''],
    major_training:[''],
    major_project:[''],
    active_backlog:[''],
    total_backlog:[''],
    fail_year:[''],
    curr_sem:[''],
    curr_cgpa:[''],
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
  constructor(private fb: FormBuilder,private handler:FormhandlerService) {
    this.session = window.sessionStorage;
    this.token = JSON.parse(this.session.getItem('token'))
    this.updateform.patchValue(this.token);
    this.addarray()
   }

   addarray(){
    //this.semarray=[]
    let n:number=this.updateform.value.curr_sem
    this.semarray =[]
    for(let i=0;i<n;i++)
    {
      this.semarray.push(i);
    }
    //console.log(this.semarray)
  }

  submit(){
      this.handler.merge(this.updateform.value);
      this.handler.submitfinal();
  }
  ngOnInit(): void {
  }

}
