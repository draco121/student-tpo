import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormhandlerService {

  constructor(private fb:FormBuilder) { }
  main_form = this.fb.group({
    rollno:[''],
    batch:[''],
    phoneno: [''],
    branch:[''],
    email:[''],
    fname:[''],
    lname:[''],
    mname:[''],
    currsem:[''],
    dob:[''],
    gender:[''],
    annualfamilyincome:[''],
    category:[''],
    fathername:[''],
    mothername:[''],
    fatherocc:[''],
    motherocc:[''],
    course:[''],
    admissionyear:[''],
    passingyear:[''],
    dropyear:[''],
    entrylevel:[''],
    gdegree: [''],
    gcourse:[''],
    guniversity: [''],
    gpassyear: [''],
    gtotal:[''],
    gmarks: [''],
    gavgpercent: [''],
    gaggpercent: [''],
    dcourse:[''],
    duniversity: [''],
    dpassyear: [''],
    dtotal:[''],
    dmarks: [''],
    davgpercent: [''],
    daggpercent: [''],
    tnboard:[''],
    tnpassyear:[''],
    tntotal:[''],
    tnmarks:[''],
    tnaggpercent:[''],
    tnavgpercent:[''],
    twboard: [''],
    twpassyear:[''],
    twtotal:[''],
    twmarks:[''],
    twaggpercent:[''],
    twavgpercent: [''],
    sem1:[''],
    sem2:[''],
    sem3:[''],
    sem4:[''],
    sem5:[''],
    sem6:[''],
    sem7:[''],
    sem8:[''],
    sem1c:[''],
    sem2c:[''],
    sem3c:[''],
    sem4c:[''],
    sem5c:[''],
    sem6c:[''],
    sem7c:[''],
    sem8c:[''],
    cgpa:[''],
    hight:[''],
    weight:[''],
    leye:[''],
    reye:[''],
    bloodgroup:[''],
    disability:[''],
    padd:[''],
    pstate:[''],
    pzip:[''],
    cadd:[''],
    cstate:[''],
    czip:[''],
    minorcompany: [''],
    minorproject: [''],
    majorproject: [''],
    majorprojectdesc: [''],
    totalbacklogs: [''],
    activebacklogs:[''],
    failyears:[''],
    issubmitted: [false],
    blacklisted:[false],
    verfied:[false],
    locked:[false]
   })
}
