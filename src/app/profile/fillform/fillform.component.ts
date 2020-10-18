import { Component, OnInit} from '@angular/core';
import { FormhandlerService } from './formhandler.service';

@Component({
  selector: 'app-fillform',
  templateUrl: './fillform.component.html',
  styleUrls: ['./fillform.component.scss']
})
export class FillformComponent implements OnInit {

  constructor(private handler: FormhandlerService) {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
  }
  f1:boolean;
  f2:boolean;
  f3:boolean;
  f4:boolean;
  ngOnInit(): void {
    this.handler.form1ob.subscribe(value=>{
      this.f1 = value;
    });
    this.handler.form2ob.subscribe(value=>{
      this.f2 = value;
    })
    this.handler.form3ob.subscribe(value=>{
      this.f3 = value;
    })
    this.handler.form4ob.subscribe(value=>{
      this.f4 = value;
    })
  }

}
