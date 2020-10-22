import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/model.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  local:any;
  doc : student;
  constructor() {
      this.local = window.sessionStorage
  }

  ngOnInit(): void {
      this.doc =<student> JSON.parse(this.local.getItem('token'))
      console.log(this.doc.photolink)
  }

}
