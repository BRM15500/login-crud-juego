import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginResponse } from './catalogService';
const CURRENT_ACCOUNT = "auth:account:current";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getAccount(): loginResponse{
    return JSON.parse(localStorage.getItem(CURRENT_ACCOUNT));
  }

  public setAccount(acc: loginResponse){
    return localStorage.setItem(CURRENT_ACCOUNT, JSON.stringify(acc));
}

logout(){
  localStorage.clear();
  this.router.navigate(['/']);
}

}
