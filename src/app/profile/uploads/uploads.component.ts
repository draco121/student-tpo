import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { ErrorlogService } from 'src/app/errorlog.service';
import { student } from 'src/app/model.interface';
import { FormhandlerService } from '../fillform/formhandler.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss'],
})
export class UploadsComponent implements OnInit {
  constructor(
    private cloud: AngularFireStorage,
    private fb: FormBuilder,
    private handler: FormhandlerService,
    private er: ErrorlogService
  ) {
    this.token = <student>JSON.parse(window.sessionStorage.getItem('token'));
  }
  uploads = this.fb.group({
    photolink: [''],
    resumelink: [''],
    tnlink: [''],
    twlink: [''],
    dlink: [''],
    glink: [''],
    isuploadformsubmitted: false,
  });
  ngOnInit(): void {}

  token: student;
  photo: File;
  resume: File;
  twmarksheet: File;
  tnmarksheet: File;
  d_cert: File;
  g_cert: File;
  downurl: Observable<string>;
  url: string;
  setphoto(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
    }
  }
  settn(event: any) {
    if (event.target.files.length > 0) {
      this.tnmarksheet = event.target.files[0];
    }
  }
  settw(event: any) {
    if (event.target.files.length > 0) {
      this.twmarksheet = event.target.files[0];
    }
  }
  setd(event: any) {
    if (event.target.files.length > 0) {
      this.d_cert = event.target.files[0];
    }
  }
  setg(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
    }
  }
  setresume(event: any) {
    if (event.target.files.length > 0) {
      this.resume = event.target.files[0];
    }
  }

  uphoto() {
    try {
      let path = this.token.batch + '/' + this.token.rollno + '/photo.jpg';
      let ref = this.cloud.ref(path);
      let task = this.cloud.upload(path, this.photo);
      let progress = document.getElementById('photostatus');;
      task.percentageChanges().subscribe((obs) => {
        progress.style.width = obs.toString() + '%';
        if (obs === 100) progress.style.backgroundColor = 'yellow';
        else {
          progress.style.backgroundColor = 'brown';
        }
      });
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downurl = ref.getDownloadURL();
            this.downurl.subscribe((url) => {
              this.url = url.toString();
              this.uploads.patchValue({
                photolink: url,
              });
              progress.style.backgroundColor = 'green';
            });
          })
        )
        .subscribe();
    } catch (err) {
      this.er.log(err);
    }
  }

  uresume() {
    try {
      let path = this.token.batch + '/' + this.token.rollno + '/resume.pdf';
      let ref = this.cloud.ref(path);
      let task = this.cloud.upload(path, this.resume);
      let progress = document.getElementById('resumestatus');
      task.percentageChanges().subscribe((obs) => {
        progress.style.width = obs.toString() + '%';
        if (obs === 100) progress.style.backgroundColor = 'yellow';
        else {
          progress.style.backgroundColor = 'brown';
        }
      });
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downurl = ref.getDownloadURL();
            this.downurl.subscribe((url) => {
              this.url = url.toString();
              this.uploads.patchValue({
                resumelink: url,
              });
              progress.style.backgroundColor = 'green';
            });
          })
        )
        .subscribe();
    } catch (err) {
      this.er.log(err);
    }
  }

  utn() {
    try {
      let path = this.token.batch + '/' + this.token.rollno + '/tenth.pdf';
      let ref = this.cloud.ref(path);
      let task = this.cloud.upload(path, this.tnmarksheet);
      let progress = document.getElementById('tnstatus');
      task.percentageChanges().subscribe((obs) => {
        progress.style.width = obs.toString() + '%';
        if (obs === 100) progress.style.backgroundColor = 'yellow';
        else {
          progress.style.backgroundColor = 'brown';
        }
      });
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downurl = ref.getDownloadURL();
            this.downurl.subscribe((url) => {
              this.url = url.toString();
              this.uploads.patchValue({
                tnlink: url,
              });
              progress.style.backgroundColor = 'green';
            });
          })
        )
        .subscribe();
    } catch (err) {
      this.er.log(err);
    }
  }

  utw() {
    try {
      let path = this.token.batch + '/' + this.token.rollno + '/twelth.pdf';
      let ref = this.cloud.ref(path);
      let task = this.cloud.upload(path, this.twmarksheet);
      let progress = document.getElementById('twstatus');
      task.percentageChanges().subscribe((obs) => {
        progress.style.width = obs.toString() + '%';
        if (obs === 100) progress.style.backgroundColor = 'yellow';
        else {
          progress.style.backgroundColor = 'brown';
        }
      });
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downurl = ref.getDownloadURL();
            this.downurl.subscribe((url) => {
              this.url = url.toString();
              this.uploads.patchValue({
                twlink: url,
              });
              progress.style.backgroundColor = 'green';
            });
          })
        )
        .subscribe();
    } catch (err) {
      this.er.log(err);
    }
  }

  ud() {
    try {
      let path = this.token.batch + '/' + this.token.rollno + '/diploma.pdf';
      let ref = this.cloud.ref(path);
      let task = this.cloud.upload(path, this.d_cert);
      let progress = document.getElementById('dstatus');
      task.percentageChanges().subscribe((obs) => {
        progress.style.width = obs.toString() + '%';
        if (obs === 100) progress.style.backgroundColor = 'yellow';
        else {
          progress.style.backgroundColor = 'brown';
        }
      });
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downurl = ref.getDownloadURL();
            this.downurl.subscribe((url) => {
              this.url = url.toString();
              this.uploads.patchValue({
                dlink: url,
              });
              progress.style.backgroundColor = 'green';
            });
          })
        )
        .subscribe();
    } catch (err) {
      this.er.log(err);
    }
  }

  ug() {
    try {
      let path = this.token.batch + '/' + this.token.rollno + '/degree.pdf';
      let ref = this.cloud.ref(path);
      let task = this.cloud.upload(path, this.g_cert);
      let progress = document.getElementById('gstatus');
      task.percentageChanges().subscribe((obs) => {
        progress.style.width = obs.toString() + '%';
        if (obs === 100) progress.style.backgroundColor = 'yellow';
        else {
          progress.style.backgroundColor = 'brown';
        }
      });
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downurl = ref.getDownloadURL();
            this.downurl.subscribe((url) => {
              this.url = url.toString();
              this.uploads.patchValue({
                glink: url,
              });
              progress.style.backgroundColor = 'green';
            });
          })
        )
        .subscribe();
    } catch (err) {
      this.er.log(err);
    }
  }

  submit() {
    try {
      this.uploads.patchValue({
        isuploadformsubmitted: true,
      });
      this.handler.merge(this.uploads.value);
      this.handler.submitfinal();
    } catch (err) {
      this.er.log(err);
    }
  }
}
