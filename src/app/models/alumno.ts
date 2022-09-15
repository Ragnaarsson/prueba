import {Seccion} from '../models/seccion'

export class Alumno {
  public rut : string = " ";
  public nombre : string = " ";
  public apellido : string = " ";
  public edad : number = 0;
  public seccion! : Seccion;
}

