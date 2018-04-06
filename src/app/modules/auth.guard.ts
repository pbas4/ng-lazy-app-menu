import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private userService: UserService) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.isLoggedIn();
  }

}
