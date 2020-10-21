import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { windowToggle } from 'rxjs/operators';
import { ErrorlogService } from 'src/app/errorlog.service';

@Injectable({
  providedIn: 'root',
})
export class FormhandlerService {
  main_form = this.fb.group({
    rollno: [''],
    batch: [''],
    fname: [''],
    mname: [''],
    lname: [''],
    phone: [''],
    altphone: ['', Validators.required],
    gender: ['', Validators.required],
    email: [''],
    family_income: ['', Validators.required],
    category: ['', Validators.required],
    dob: ['', Validators.required],
    altemail: ['', Validators.required],
    p_add_l1: ['', Validators.required],
    p_add_l2: ['', Validators.required],
    p_state: ['', Validators.required],
    p_city: ['', Validators.required],
    p_country: ['', Validators.required],
    p_zip: ['', Validators.required],
    c_add_l1: ['', Validators.required],
    c_add_l2: ['', Validators.required],
    c_state: ['', Validators.required],
    c_city: ['', Validators.required],
    c_country: ['', Validators.required],
    c_zip: ['', Validators.required],
    father_name: ['', Validators.required],
    father_occ: ['', Validators.required],
    mother_name: ['', Validators.required],
    mother_occ: ['', Validators.required],
    admission_year: ['', Validators.required],
    passing_year: ['', Validators.required],
    drop_year: ['', Validators.required],
    course: ['', Validators.required],
    branch: ['', Validators.required],
    curr_sem: ['', Validators.required],
    entry_level: ['', Validators.required],
    total_backlog: ['', Validators.required],
    active_backlog: ['', Validators.required],
    fail_year: ['', Validators.required],
    minor_training: ['', Validators.required],
    minor_project: ['', Validators.required],
    major_training: ['', Validators.required],
    major_project: ['', Validators.required],
    curr_cgpa: ['', Validators.required],
    sem1_sgpa: [0],
    sem1_total_credit: [0],
    sem1_earned_credit: [0],
    sem2_sgpa: [0],
    sem2_total_credit: [0],
    sem2_earned_credit: [0],
    sem3_sgpa: [0],
    sem3_total_credit: [0],
    sem3_earned_credit: [0],
    sem4_sgpa: [0],
    sem4_total_credit: [0],
    sem4_earned_credit: [0],
    sem5_sgpa: [0],
    sem5_total_credit: [0],
    sem5_earned_credit: [0],
    sem6_sgpa: [0],
    sem6_total_credit: [0],
    sem6_earned_credit: [0],
    sem7_sgpa: [0],
    sem7_total_credit: [0],
    sem7_earned_credit: [0],
    sem8_sgpa: [0],
    sem8_total_credit: [0],
    sem8_earned_credit: [0],
    tn_board: ['', Validators.required],
    tn_pass_year: ['', Validators.required],
    tn_agg_percent: ['', Validators.required],
    tn_school: ['', Validators.required],
    tn_city: ['', Validators.required],
    tn_state: ['', Validators.required],
    tn_zip: ['', Validators.required],
    tw_board: [''],
    tw_pass_year: [''],
    tw_agg_percent: [''],
    tw_school: [''],
    tw_city: [''],
    tw_state: [''],
    tw_zip: [''],
    g_degree: [''],
    g_course: [''],
    g_university: [''],
    g_pass_year: [''],
    g_agg_percent: [''],
    g_city: [''],
    g_state: [''],
    g_zip: [''],
    d_degree: [''],
    d_course: [''],
    d_university: [''],
    d_pass_year: [''],
    d_agg_percent: [''],
    d_city: [''],
    d_state: [''],
    d_zip: [''],
    isblacklisted: false,
    isverified: false,
    master_lock: false,
    secondary_lock: false,
    ismainformsubmitted: false,
    isuploadformsubmitted: false,
    photolink: [''],
    resumelink: [''],
    tnlink: [''],
    twlink: [''],
    dlink: [''],
    glink: [''],
  });
  form1 = new BehaviorSubject<boolean>(false);
  form2 = new BehaviorSubject<boolean>(false);
  form3 = new BehaviorSubject<boolean>(false);
  form4 = new BehaviorSubject<boolean>(false);
  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private router: Router,
    private er: ErrorlogService
  ) {
    try {
      let data = JSON.parse(window.sessionStorage.getItem('token'));
      this.main_form.patchValue(data);
    } catch (err) {
      this.er.log(err);
    }
  }

  submitfinal() {
    try {
      if (
        this.main_form.value.ismainformsubmitted &&
        this.main_form.value.isuploadformsubmitted
      ) {
        this.main_form.patchValue({
          master_lock: true,
          secondary_lock: true,
        });
      }
      let db = this.afs.collection(this.main_form.value.batch).ref;
      let id: string = this.main_form.value.rollno;
      db.doc(id.toUpperCase())
        .update(this.main_form.value)
        .then((res) => {
          window.alert('form submitted successfully');
          this.router.navigateByUrl('/profile/alert');
        })
        .catch((err) => {
          this.main_form.patchValue({
            master_lock: false,
            secondary_lock: false,
          });
          window.alert('error occured:' + err);
        });
    } catch (err) {
      this.er.log(err);
    }
  }

  merge(data: any) {
    try {
      this.main_form.patchValue(data);
      console.log(this.main_form.value);
    } catch (err) {
      this.er.log(err);
    }
  }
}
