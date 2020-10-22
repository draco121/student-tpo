import { Component, OnInit } from '@angular/core';
import { ErrorlogService } from 'src/app/errorlog.service';
import { FormhandlerService } from '../formhandler.service';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss'],
})
export class Form4Component implements OnInit {
  constructor(
    public handler: FormhandlerService,
    private er: ErrorlogService
  ) {
    this.alert = ""
  }
  agree = false;
  alert: string;
  ngOnInit(): void {}

  isdisabled(): boolean {
    try {
      if (this.handler.main_form.invalid) {
        this.alert =
          'some reqired information is missing check the previous forms';
        return true;
      } else {
        if (!this.agree) return true;
        else return false;
      }
    } catch (err) {
      this.er.log(err);
    }
  }

  isagreed(event: any): void {
    try {
      if (event.target.checked) this.agree = true;
      else this.agree = false;
    } catch (err) {
      this.er.log(err);
    }
  }

  submit() {
    try {
      this.handler.merge({ ismainformsubmitted: true });
      this.handler.submitfinal();
      this.handler.form4.next(true);
    } catch (err) {
      this.er.log(err);
    }
  }
}
