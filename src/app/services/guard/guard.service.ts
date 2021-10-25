import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router: Router,
              private authService: AuthService) { }

  /**
   * Return an Observable which indicate if the user is log or not. Redirect to the login page if anybody is log
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.token.getValue()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
