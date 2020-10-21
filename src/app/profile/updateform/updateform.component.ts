import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder } from '@angular/forms';
import { storage } from 'firebase';
import { finalize } from 'rxjs/operators';
import { ErrorlogService } from 'src/app/errorlog.service';
import { student } from 'src/app/model.interface';
import { FormhandlerService } from '../fillform/formhandler.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {
  semarray = [];
  session: Storage;
  token: student;
  updateform = this.fb.group({
    phone: [''],
    email: [''],
    minor_training: [''],
    minor_project: [''],
    major_training: [''],
    major_project: [''],
    active_backlog: [''],
    total_backlog: [''],
    fail_year: [''],
    curr_sem: [''],
    curr_cgpa: [''],
    photolink: [''],
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
  });
  constructor(
    private fb: FormBuilder,
    private handler: FormhandlerService,
    private cloud: AngularFireStorage,
    private er: ErrorlogService
  ) {
    try {
      this.session = window.sessionStorage;
      this.token = JSON.parse(this.session.getItem('token'));
      this.updateform.patchValue(this.token);
      this.addarray();
    } catch (err) {
      this.er.log(err);
    }
  }

  photo: File;
  setphoto(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
    }
  }

  uphoto() {
    try {
      let path = this.token.batch + '/' + this.token.rollno + '/photo.jpg';
      let ref = this.cloud.ref(path);
      let task = this.cloud.upload(path, this.photo);

      task.percentageChanges().subscribe((obs) => {
        let progress = document.getElementById('photostatus');
        progress.style.width = obs.toString() + '%';
        if (obs === 100) progress.style.backgroundColor = 'green';
        else {
          progress.style.backgroundColor = 'brown';
        }
      });
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            let downurl = ref.getDownloadURL();
            downurl.subscribe((url) => {
              this.updateform.patchValue({
                photolink: url.toString(),
              });
            });
          })
        )
        .subscribe();
    } catch (err) {
      this.er.log(err);
    }
  }

  addarray() {
    try {
      let n: number = this.updateform.value.curr_sem;
      this.semarray = [];
      for (let i = 0; i < n; i++) {
        this.semarray.push(i);
      }
    } catch (err) {
      this.er.log(err);
    }
  }

  submit() {
    try {
      this.handler.merge(this.updateform.value);
      this.handler.submitfinal();
    } catch (err) {
      this.er.log(err);
    }
  }
  ngOnInit(): void {}
}
