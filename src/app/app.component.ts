import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CatalogService, EmpleadosDto, loginForm, loginResponse } from './services/catalogService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banregio Web App';
  hide: boolean = true;
  empleadoForm: FormGroup;
  ImageBaseData: string | ArrayBuffer = null;
  add: boolean = true;
  edit: boolean = false;
  empleados: EmpleadosDto[] = [];
  isLoged: boolean = false;
  logedUser: loginResponse = null;
  currentUser: loginResponse = null;
  constructor(private catalogService: CatalogService, private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.currentUser = this.authService.getAccount();
    console.log(this.currentUser);
    }

    login(user, pass){
      console.log(user);
      console.log(pass);
      let login = {} as loginForm;
      login.username = user;
      login.password = pass;
      this.catalogService.login(login).subscribe(x => {
        console.log(x);
        if(x.username){
          alert(x.username+" se ha logueado con éxito!");
          this.isLoged = true;
          this.logedUser = x;
          this.authService.setAccount(x);
          this.router.navigate(['/Home']);
        }else{
          alert("Credenciales inválidas");
        }
      },error =>{
        alert("Valide la información de entrada");
      })
  }
}
