import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocaouthService } from '../docaouth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css'] // Corrected styleUrl to styleUrls
})
export class DocloginComponent {

  username: string = '';
  password: string = '';
  inValidLogin = false;

  constructor(private router: Router, private docaouth:DocaouthService) {}

  checkLogin() {
    if (this.docaouth.authentication(this.username,this.password)){

      this.router.navigate(['docdash']);
      this.inValidLogin=false

    } else {
      this.inValidLogin=true
      alert('Wrong credentials');
      this.router.navigate(['home']);
    }
  }
}
