import { Component, Input } from '@angular/core';
import{Alumno} from "../../models/alumno";
import {Seccion} from "../../models/seccion"
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent  {

  @Input() public Seccion! :Seccion;


  @Input() public alumno! :Alumno;

}
