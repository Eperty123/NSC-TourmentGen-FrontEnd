import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { roles } from '../../../environments/environment';
import { AuthService } from '../../auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._authService.role$
      .pipe(
        map(role => {

          console.log(role);
          if (role == roles.admin)
            return true;

          return this._router.parseUrl("/")
        })
      );
  }
}
