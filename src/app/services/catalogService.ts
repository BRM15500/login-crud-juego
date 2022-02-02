import {
  Injectable,
  Inject
} from "@angular/core";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class CatalogService {
  constructor(public http: HttpClient) {}
  //METODOS
  login(data: loginForm) {
    //return this.http.post<loginResponse>(`localhost:8080/login`, data);
    return this.http.post < loginResponse > (`https://login-menu.herokuapp.com/login`, data);
  }
  getEmpleados() {
    return this.http.get < EmpleadosDto[] > (`https://heroku-mauricio-app.herokuapp.com/usuario`);
  }
  saveEmp(data: EmpleadosDto) {
    return this.http.post < EmpleadosDto[] > (`https://heroku-mauricio-app.herokuapp.com/usuario`, data, );
  }
  borraEmp(id: number) {
    return this.http.delete < EmpleadosDto[] > (`https://heroku-mauricio-app.herokuapp.com/usuario/${id}`, );
  }
}


export interface loginForm {
  username: string,
    password: string,
}

export interface loginResponse {
  id: number,
    username: string,
    password: string,
    rol: number
}

export interface EmpleadosDto {
  id: number,
    brm: number,
    nombre: string,
    puesto: string,
    base64: string,
    img: string
}
