import { Component,Input} from '@angular/core';
import {Alumno} from "../../models/alumno";
import { Seccion } from 'src/app/models/seccion';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent{
  @Input() public alumnos:Array<Alumno> = [{
    rut : "20713998-K",
    nombre : "Orlando",
    apellido : "Tobar",
    edad : 21,
    seccion : {id : 10, seccion : "asas"}
  },{
    rut : "20736443-2",
    nombre : "Carlitos",
    apellido : "Nuñez",
    edad : 25,
    seccion : {id : 10, seccion : "asas"}
    }];





}
