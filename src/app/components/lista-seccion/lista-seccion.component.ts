import { Component, Input} from '@angular/core';
import {Seccion} from "../../models/seccion";
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-lista-seccion',
  templateUrl: './lista-seccion.component.html',
  styleUrls: ['./lista-seccion.component.scss']
})
export class ListaSeccionComponent {

  @Input() public seccion:Array<Seccion> = [{
    id: 0,
    seccion: " ",
  }]




}
