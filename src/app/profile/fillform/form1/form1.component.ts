import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormhandlerService } from '../formhandler.service';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  token: any;
  local: any;
  session: any;
  saved:any;
  form1 = this.fb.group({
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
  })

  states = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]
    constructor(private fb: FormBuilder,private handler:FormhandlerService) {
      this.local = window.localStorage;
      this.session = window.sessionStorage;
    }
  ngOnInit(): void {
    this.saved = this.local.getItem('form1');
    this.saved = JSON.parse(this.saved)
    if(this.saved)
      this.form1.patchValue(this.saved)
    else{
      this.token = JSON.parse(this.session.getItem('token'))
      this.form1.patchValue(this.token)
    }
  }

  submit(){
    this.handler.merge(this.form1.value);
  }

}
