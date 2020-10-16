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
    altphone: ['',Validators.required],
    gender: ['',Validators.required],
    email: [''],
    family_income: ['',Validators.required],
    category:['',Validators.required],
    dob: ['',Validators.required],
    altemail: ['',Validators.required],
    p_add_l1: ['',Validators.required],
    p_add_l2: ['',Validators.required],
    p_state: ['',Validators.required],
    p_city: ['',Validators.required],
    p_country: ['',Validators.required],
    p_zip: ['',Validators.required],
    c_add_l1: [''],
    c_add_l2: [''],
    c_state: [''],
    c_city: [''],
    c_country: [''],
    c_zip: [''],
    father_name: ['',Validators.required],
    father_occ: ['',Validators.required],
    mother_name: ['',Validators.required],
    mother_occ: ['',Validators.required],
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

  copyadd(event:any){
     if(event.target.checked){
      this.form1.patchValue(
        {
          c_add_l1: this.form1.value.p_add_l1,
          c_add_l2: this.form1.value.p_add_l2,
          c_state: this.form1.value.p_state,
          c_city: this.form1.value.p_city,
          c_country: this.form1.value.p_country,
          c_zip: this.form1.value.p_zip
        }
      )
     }
  }

  submit(){
    this.handler.merge(this.form1.value);
  }

}
