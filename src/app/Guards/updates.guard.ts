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

  async islocked(): Promise<boolean> {
    let token = <student>JSON.parse(window.sessionStorage.getItem('token'));
    let localsecondarylock = token.secondary_lock;
    let globalsecondarylock: boolean;
    await this.rc.getsecondarylock(token.batch).then((lock) => {
      globalsecondarylock = lock;
      console.log(globalsecondarylock);
    });
    return localsecondarylock && globalsecondarylock;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.islocked().then((lock) => {
      if (!lock) {
        return true;
      } else {
        this.router.navigateByUrl('/profile/alert');
        return false;
      }
    });
  }
}
