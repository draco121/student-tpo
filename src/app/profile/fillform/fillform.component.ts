import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorlogService } from 'src/app/errorlog.service';
import { FormhandlerService } from './formhandler.service';

@Component({
  selector: 'app-fillform',
  templateUrl: './fillform.component.html',
  styleUrls: ['./fillform.component.scss'],
})
export class FillformComponent implements OnInit {
  constructor(
    private handler: FormhandlerService,
    private router: Router,
    private er: ErrorlogService
  ) {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
  }
  f1: boolean;
  f2: boolean;
  f3: boolean;
  f4: boolean;
  ngOnInit(): void {
    this.handler.form1.subscribe((value) => {
      this.f1 = value;
    });
    this.handler.form2.subscribe((value) => {
      this.f2 = value;
    });
    this.handler.form3.subscribe((value) => {
      this.f3 = value;
    });
    this.handler.form4.subscribe((value) => {
      this.f4 = value;
    });
  }
  isinstructionaccepted = false;
  isproceeded = false;

  ischecked(event: any) {
    try {
      if (event.target.checked) {
        this.isinstructionaccepted = true;
      } else {
        this.isinstructionaccepted = false;
      }
    } catch (err) {
      this.er.log(err);
    }
  }

  proceed() {
    try {
      this.isproceeded = true;
      this.router.navigateByUrl('/profile/fillform/form1');
    } catch (err) {
      this.er.log(err);
    }
  }
}
