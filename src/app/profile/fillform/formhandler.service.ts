import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Form1Component } from './form1/form1.component';

@Injectable({
  providedIn: 'root'
})
export class FormhandlerService {

  main_form = this.fb.group({
    rollno: [''],
    batch: [''],
    fname: [''],
    mname: [''],
    lname: [''],
    phone: [''],
    altphone: [''],
    email: [''],
    family_income: [''],
    category:[''],
    dob: [''],
    altemail: [''],
    p_add_l1: [''],
    p_add_l2: [''],
    p_state: [''],
    p_city: [''],
    p_country: [''],
    p_zip: [''],
    c_add_l1: [''],
    c_add_l2: [''],
    c_state: [''],
    c_city: [''],
    c_country: [''],
    c_zip: [''],
    father_name: [''],
    father_occ: [''],
    mother_name: [''],
    mother_occ: [''],
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
    sem8_earned_credit:[''],
    tn_board:[''],
    tn_pass_year:[''],
    tn_agg_percent:[''],
    tn_school:[''],
    tn_city:[''],
    tn_state:[''],
    tn_zip:[''],
    tw_board:[''],
    tw_pass_year:[''],
    tw_agg_percent:[''],
    tw_school:[''],
    tw_city:[''],
    tw_state:[''],
    tw_zip:[''],
    g_degree:[''],
    g_course:[''],
    g_university:[''],
    g_pass_year:[''],
    g_agg_percent:[''],
    g_city:[''],
    g_state:[''],
    g_zip:[''],
    d_degree:[''],
    d_course:[''],
    d_university:[''],
    d_pass_year:[''],
    d_agg_percent:[''],
    d_city:[''],
    d_state:[''],
    d_zip:['']
   })

   constructor(private fb:FormBuilder) { }



   merge(data:any)
   {
     this.main_form.patchValue(data)
     console.log(this.main_form.value)
   }



}
