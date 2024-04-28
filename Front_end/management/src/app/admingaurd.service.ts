import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminaouthService } from './adminaouth.service';

@Injectable({
  providedIn: 'root'
})
export class AdmingaurdService implements CanActivate {

  constructor(private adminAouthService:AdminaouthService , private router: Router) { }

  canActivate (): boolean {
    if (this.adminAouthService.inUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['adminlog']);
      return false;
    }
  }
}
