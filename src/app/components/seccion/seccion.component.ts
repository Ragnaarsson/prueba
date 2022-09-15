import { Component, Input, OnInit } from '@angular/core';
import { Seccion } from "src/app/models/seccion";
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {

@Input() public seccion! : Seccion;
}
