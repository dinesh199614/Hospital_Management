import { Component } from '@angular/core';
import { AdminaouthService } from '../adminaouth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent {

  username2:string=''
  password:string=''
  inValidLogin=false;

  constructor(private adminAuthService:AdminaouthService, private router:Router ){}

  checkLogin(){

    if (this.adminAuthService.authentication(this.username2,this.password)){

      this.router.navigate(['admin'])
      this.inValidLogin=false
    }
      else{

      this.inValidLogin=true
      alert("wrong credentials");
      this.router.navigate(['home'])

    }

  }
}


