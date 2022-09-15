import { Component,Input, Output } from '@angular/core';
import {Seccion} from "../../src/app/models/seccion"
import {Alumno} from "../../src/app/models/alumno"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {


  @Output() public listaSeccion: Array<Seccion> = [
    {id: 1,
    seccion : "ABC-123"},
    {id:2,
    seccion : "ABC-234"}
  ]

  public ListaAlumnos : Array<Alumno> = [
    {rut : "20713998-k",
    nombre: "Juan",
    apellido: "Torres",
    edad : 15,
    seccion : this.listaSeccion[0]
  }
  ]

  public guardarSeccion(nuevo: Seccion): void{
    this.listaSeccion.push(nuevo);
    console.log("Datos guardados",this.listaSeccion.length);
  }

  public guardarAlumno(nueva: Alumno): void{
    this.ListaAlumnos.push(nueva);
    console.log(this.listaSeccion);
      }


}
