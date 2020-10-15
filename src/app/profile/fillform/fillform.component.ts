import { Component, OnInit} from '@angular/core';
import { FormhandlerService } from './formhandler.service';

@Component({
  selector: 'app-fillform',
  templateUrl: './fillform.component.html',
  styleUrls: ['./fillform.component.scss']
})
export class FillformComponent implements OnInit {

  form1:boolean;
  form2:boolean;
  form3:boolean;
  form4:boolean;
  form5:boolean;
  constructor(private handler: FormhandlerService) {
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = false;
    this.form5 = false;
  }
  ngOnInit(): void {
  }

}
