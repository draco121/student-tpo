import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormhandlerService } from '../formhandler.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {


  form3= this.fb.group({
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

  constructor(private fb: FormBuilder,private handler:FormhandlerService) { }

  ngOnInit(): void {
  }

  submit(){
        this.handler.merge(this.form3.value)
  }

}
