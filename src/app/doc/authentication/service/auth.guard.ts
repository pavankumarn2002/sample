import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.validateUserTocken()) {
            return true;
        } else {
            this.router.navigate(['/doc/auth/login'], {
                queryParams: {
                    returnUrl: state.url
                }
            });
            return false;
        }
    }
  
}
