import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ListaHistorialComponent } from './components/lista-historial/lista-historial.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './components/formulario-seccion/formulario-seccion.component';
import { ListaSeccionComponent } from './components/lista-seccion/lista-seccion.component';
import { SeccionComponent } from './components/seccion/seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    HistorialComponent,
    ListaAlumnosComponent,
    ListaHistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
    ListaSeccionComponent,
    SeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
