import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
  CanActivate,
} from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AdmincontrolService } from '../controller/admincontrol.service';
import { student } from '../model.interface';

@Injectable({
  providedIn: 'root',
})
export class MainformGuard implements CanActivateChild, CanActivate {
  constructor(private rc: AdmincontrolService, private router: Router) {}
  async islocked(): Promise<boolean> {
    let data = window.sessionStorage.getItem('token');
    let token = <student>JSON.parse(data);
    let localmasterlock = token.master_lock;
    let globalmasterlock: boolean;
    await this.rc.getmasterlock(token.batch).then((lock) => {
      globalmasterlock = lock;
    });
    return globalmasterlock && localmasterlock;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.islocked().then((lock) => {
      if (!lock) {
        //console.log(lock)
        return true;
      } else {
        this.router.navigateByUrl('/profile/alert');
        return false;
      }
    });
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.islocked().then((lock) => {
      if (!lock) return true;
      else {
        this.router.navigateByUrl('/profile/alert');
        return false;
      }
    });
  }
}
