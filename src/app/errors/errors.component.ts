import { Component, OnInit } from '@angular/core';
import { ErrorlogService } from '../errorlog.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  constructor(private er:ErrorlogService) { }
  errors:string[] =[]
  ngOnInit(): void {
      this.errors = this.er.errors;
  }

}
