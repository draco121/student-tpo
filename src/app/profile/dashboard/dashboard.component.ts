import { Component, OnInit } from '@angular/core';

interface student{
  fname: string;
  lname: string;
  phoneno: string;
  rollno: string;
  branch: string;
  batch: string;
  email: string;
}
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
      this.doc = JSON.parse(this.local.getItem('token'))
  }

}
