import { Component, OnInit } from '@angular/core';
import { FormhandlerService } from '../formhandler.service';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {

  constructor(public handler: FormhandlerService) { }
  agree = false;
  ngOnInit(): void {
  }

  isdisabled():boolean{
    if(this.handler.main_form.invalid)
    return true;
    else{
      if(!this.agree)
      return true;
      else return false;
    }
  }

  isagreed(event:any): void{
    if(event.target.checked)
    this.agree = true;
    else this.agree = false;
  }

  submit(){
    this.handler.submitfinal()
  }

}
