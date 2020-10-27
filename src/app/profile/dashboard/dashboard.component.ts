import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorlogService } from 'src/app/errorlog.service';
import { student } from 'src/app/model.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  local: any;
  doc: student;
  constructor(private router: Router, private er: ErrorlogService) {
    this.local = window.sessionStorage
  }

  ngOnInit(): void {
    this.doc = <student>JSON.parse(this.local.getItem('token'))
  }


  logout() {
    try {
      window.sessionStorage.clear();
      window.localStorage.clear();
      this.router.navigate(['/login']);
    } catch (err) {
      this.er.log(err);
    }
  }

}
