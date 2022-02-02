import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosCrudComponent } from './empleados-crud/empleados-crud.component';
import { HomeComponent } from './home/home.component';
import { JuegoComponent } from './juego/juego.component';

const routes: Routes = [
  { path: 'Empleados', component: EmpleadosCrudComponent },
  { path: 'Juego', component: JuegoComponent},
  { path: 'Home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
