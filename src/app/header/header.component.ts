import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isloggedin :boolean = false
  local:any;
  constructor(private router: Router) {
      this.local = window.sessionStorage
   }

  ngOnInit(): void {
      let token = this.local.getItem('token');
      if(token)
      this.isloggedin = true;
  }

  logout(){
    this.local.removeItem('token');
    this.isloggedin = false;
    this.router.navigate(['/login'])
  }

}
