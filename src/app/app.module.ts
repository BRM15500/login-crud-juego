import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosCrudComponent } from './empleados-crud/empleados-crud.component';
import { JuegoComponent } from './juego/juego.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CuadroComponent } from './juego/cuadro/cuadro.component';
import { TablaComponent } from './juego/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosCrudComponent,
    JuegoComponent,
    MenuComponent,
    HomeComponent,
    CuadroComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
