import {
  Component,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CatalogService, EmpleadosDto, loginResponse } from '../services/catalogService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleados-crud',
  templateUrl: './empleados-crud.component.html',
  styleUrls: ['./empleados-crud.component.css']
})
export class EmpleadosCrudComponent implements OnInit {
  empleadoForm: FormGroup;
  ImageBaseData: string | ArrayBuffer = null;
  add: boolean = true;
  edit: boolean = false;
  empleados: EmpleadosDto[] = [];
  currentUser: loginResponse = null;
  constructor(private catalogService: CatalogService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.traerEmpleados();
    //console.log("Usuario logeado: ", this.authService.getAccount());
    this.currentUser = this.authService.getAccount();
    if(this.currentUser.rol !== 1){
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }

  traerEmpleados() {
    //Trae a los empleados
    this.catalogService.getEmpleados().subscribe(x => {
      this.empleados = x;
    }, error => {
      alert("Error: \n" + error);
    });

    this.empleadoForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      brm: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      puesto: new FormControl(null, Validators.required),
      //foto: new FormControl(null),
    });
  }

  setValues(data) {
    this.empleadoForm.patchValue({
      id: data.id,
      brm: data.brm,
      nombre: data.nombre,
      puesto: data.puesto,
      //foto: data.puesto
    });
  }

  guardarEmp() {
    let nuevoEmp = {} as EmpleadosDto;
    nuevoEmp.id = this.empleadoForm.controls["id"].value;
    nuevoEmp.brm = this.empleadoForm.controls["brm"].value;
    nuevoEmp.nombre = this.empleadoForm.controls["nombre"].value;
    nuevoEmp.puesto = this.empleadoForm.controls["puesto"].value;
    nuevoEmp.img = this.ImageBaseData.toString().split(",")[0];
    nuevoEmp.base64 = this.ImageBaseData.toString().split(",")[1];
    console.log(nuevoEmp);
    //Se agrega/edita
    this.catalogService.saveEmp(nuevoEmp).subscribe(res => {
      alert(res);
      this.ngOnInit();
    }, error => {
      alert("Error: \n" + error);
    });
  }

  editEmp(emp) {
    this.add = false;
    this.edit = true;
    this.setValues(emp);
  }

  elimEmp(emp) {
    this.catalogService.borraEmp(emp.id).subscribe(res => {
      alert(res);
      this.ngOnInit();
    }, error => {
      alert("Error: \n" + error);
      this.ngOnInit();
    });
  }

  handleFileInput(files: FileList) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //console.log(reader.result);
      alert("Imagen cargada con éxito!");
      me.ImageBaseData = reader.result;
    };
    reader.onerror = function (error) {
      //console.log('Error: ', error);
      alert('Error al cargar imagen: ' + error)
    };
  }
  btnUpload() {
    console.log(this.ImageBaseData.toString())
  }
}
