import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminaouthService {

  constructor() { }

  authentication(username: string, password: string): boolean {
    if (username === "kabeer" && password === "123456") {
      sessionStorage.setItem("username2", username);
      return true;
    } else {
      return false;
    }
  }

  inUserLoggedIn(): boolean {
    console.log("User logged in");
    const user = sessionStorage.getItem("username2");
    return !(user == null);
  }

  logOut(): void {
    sessionStorage.removeItem("username2");
    console.log("User logged out");
  }
}
