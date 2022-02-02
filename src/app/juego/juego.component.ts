import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { loginForm, loginResponse } from '../services/catalogService';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  currentUser: loginResponse = null;
  gameStarted: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getAccount();
    if(this.currentUser.rol !== 2){
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }
  initGame(){
    this.gameStarted = true;
  }

}
