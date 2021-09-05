import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { windowToggle } from 'rxjs/operators';
import { AdmincontrolService } from '../controller/admincontrol.service';
import { student } from '../model.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdatesGuard implements CanActivate {
  globalsecondarylock: boolean;
  localsecondarylock: boolean;
  constructor(private rc: AdmincontrolService, private router: Router) {}

  async islocked() {
    let token = <student>JSON.parse(window.sessionStorage.getItem('token'));
    this.localsecondarylock = token.secondary_lock;
    //let globalsecondarylock: boolean;
    await this.rc.getsecondarylock(token.batch).then((lock) => {
      this.globalsecondarylock = lock;
      console.log(this.globalsecondarylock);
    });
    // if(localsecondarylock){
    //   return true;
    // }else if(globalsecondarylock){
    //   return true;
    // }
    // else{
    //   return false;
    // }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      this.islocked();
      if(this.globalsecondarylock){
        if(this.localsecondarylock){
          this.router.navigateByUrl('/profile/alert');
          return false;
        }
      }else{
        return true;
      }
  }
}
