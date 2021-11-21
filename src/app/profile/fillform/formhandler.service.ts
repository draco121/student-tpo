import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { windowToggle } from 'rxjs/operators';
import { ErrorlogService } from 'src/app/errorlog.service';
import { student } from 'src/app/model.interface';

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
    altphone: [''],
    gender: ['', Validators.required],
    email: [''],
    family_income: ['', Validators.required],
    category: ['', Validators.required],
    dob: ['', Validators.required],
    altemail: [''],
    p_add_l1: ['', Validators.required],
    p_add_l2: [''],
    p_state: ['', Validators.required],
    p_city: ['', Validators.required],
    p_country: ['', Validators.required],
    p_zip: ['', Validators.required],
    c_add_l1: ['', Validators.required],
    c_add_l2: [''],
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
    sem1_sgpa: ['NA'],
    sem1_total_credit: ['NA'],
    sem1_earned_credit: ['NA'],
    sem2_sgpa: ['NA'],
    sem2_total_credit: ['NA'],
    sem2_earned_credit: ['NA'],
    sem3_sgpa: ['NA'],
    sem3_total_credit: ['NA'],
    sem3_earned_credit: ['NA'],
    sem4_sgpa: ['NA'],
    sem4_total_credit: ['NA'],
    sem4_earned_credit: ['NA'],
    sem5_sgpa: ['NA'],
    sem5_total_credit: ['NA'],
    sem5_earned_credit: ['NA'],
    sem6_sgpa: ['NA'],
    sem6_total_credit: ['NA'],
    sem6_earned_credit: ['NA'],
    sem7_sgpa: ['NA'],
    sem7_total_credit: ['NA'],
    sem7_earned_credit: ['NA'],
    sem8_sgpa: ['NA'],
    sem8_total_credit: ['NA'],
    sem8_earned_credit: ['NA'],
    tn_board: ['', Validators.required],
    tn_pass_year: ['', Validators.required],
    tn_agg_percent: ['', Validators.required],
    tn_school: ['', Validators.required],
    tn_city: ['', Validators.required],
    tn_state: ['', Validators.required],
    tn_zip: ['', Validators.required],
    tw_board: ['NA'],
    tw_pass_year: ['NA'],
    tw_agg_percent: ['NA'],
    tw_school: ['NA'],
    tw_city: ['NA'],
    tw_state: ['NA'],
    tw_zip: ['NA'],
    g_degree: ['NA'],
    g_course: ['NA'],
    g_university: ['NA'],
    g_pass_year: ['NA'],
    g_agg_percent: ['NA'],
    g_city: ['NA'],
    g_state: ['NA'],
    g_zip: ['NA'],
    d_degree: ['NA'],
    d_course: ['NA'],
    d_university: ['NA'],
    d_pass_year: ['NA'],
    d_agg_percent: ['NA'],
    d_city: ['NA'],
    d_state: ['NA'],
    d_zip: ['NA'],
    isblacklisted: false,
    isverified: false,
    master_lock: false,
    secondary_lock: true,
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
      let data = <student>JSON.parse(window.sessionStorage.getItem('token'));
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
    } catch (err) {
      this.er.log(err);
    }
  }
}
