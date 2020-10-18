import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormhandlerService } from '../formhandler.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {


  form3= this.fb.group({
    tn_board:['',Validators.required],
    tn_pass_year:['',Validators.required],
    tn_agg_percent:['',Validators.required],
    tn_school:['',Validators.required],
    tn_city:['',Validators.required],
    tn_state:['',Validators.required],
    tn_zip:['',Validators.required],
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
  local:any;
  session:any;
  constructor(private fb: FormBuilder,public handler:FormhandlerService,public router: Router) {
    this.local = window.localStorage;
    this.session = window.sessionStorage;
  }

  ngOnInit(): void {
    let data = JSON.parse(this.local.getItem('form3'));
    if(data){
      this.form3.patchValue(data);
    }
    let token = JSON.parse(this.session.getItem('token'));
    this.form3.patchValue(token);
  }


  submit(){
        this.handler.merge(this.form3.value);
        this.local.setItem('form3',JSON.stringify(this.form3.value));
        this.router.navigateByUrl('/profile/fillform/form4');
  }

}
