import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { loginResponse } from '../services/catalogService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
currentUser: loginResponse = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getAccount();
    if(!this.authService.getAccount){
      this.router.navigate(['/']);
    }
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/#']);
  }

}
