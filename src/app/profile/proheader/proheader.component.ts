import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorlogService } from 'src/app/errorlog.service';

@Component({
  selector: 'app-proheader',
  templateUrl: './proheader.component.html',
  styleUrls: ['./proheader.component.scss'],
})
export class ProheaderComponent implements OnInit {
  constructor(private router: Router, private er: ErrorlogService) {}

  ngOnInit(): void {}

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
