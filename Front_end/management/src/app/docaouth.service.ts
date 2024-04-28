import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocaouthService {

  constructor() { }

  authentication(username:string,password:string){

    if(username=="dinesh"&&password=="123456"){

      sessionStorage.setItem("username",username);
      return true;
    }
    else{
      return  false;
    }
  }
}
