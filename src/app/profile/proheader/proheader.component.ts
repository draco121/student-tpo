import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proheader',
  templateUrl: './proheader.component.html',
  styleUrls: ['./proheader.component.scss']
})
export class ProheaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    window.sessionStorage.clear();
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

}
