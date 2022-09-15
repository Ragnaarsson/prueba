import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormularioSeccionComponent } from '../../components/formulario-seccion/formulario-seccion.component';
import { Alumno } from "../../models/alumno"
import {Seccion, TipoSeccion} from "../../models/seccion"

import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Input() dataEntrante :any=[];
  @Output() rescateAlumno = new EventEmitter<Alumno>();
  @Output() RescateSeccion = new EventEmitter<Seccion>();


  public alumno: Alumno = {
    rut : " ",
    nombre : " ",
    apellido : " ",
    edad : 0,
    seccion : {
      id : 0,
      seccion : " "
    }
  }

    public data = Object.values(this.dataEntrante)
    
    public guardarRut(evento : Event) : void{
      const ru = evento.target as HTMLInputElement;
      this.alumno.rut = ru.value;
    }

    public guardarNombre(evento : Event) : void{
      const nom = evento.target as HTMLInputElement;
      this.alumno.nombre = nom.value;
    }

    public guardarApellido(evento : Event) : void{
      const ap = evento.target as HTMLInputElement;
      this.alumno.apellido = ap.value;
    }
    public guardarEdad(evento : Event) : void{
      const eda = evento.target as HTMLInputElement;
      this.alumno.edad = Number.parseInt(eda.value)  ;
    }


    public guardarSeccionAlumno(evento : Event) : void{
      const secc= evento.target as HTMLInputElement;
      this.alumno.seccion.seccion = secc.value;
    }


    public GuardarTodo(): void{
      // se crea una copia
      const copia: Alumno = {...this.alumno};
      //emitir la cop¡ia
      this.rescateAlumno.emit(copia);
      //vaciar el formulario
      this.alumno.rut = " ";
      this.alumno.nombre = " ";
      this.alumno.apellido = " ";
      this.alumno.edad = 0;
      this.alumno.seccion.seccion;
      console.log("SE guardo", this.dataEntrante)

    }




  }






