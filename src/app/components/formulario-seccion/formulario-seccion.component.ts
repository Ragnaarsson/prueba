
import { Component, Input, EventEmitter , Output } from '@angular/core';
import { Seccion } from 'src/app/models/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
  @Output() public rescate = new EventEmitter<Seccion>();

  public seccion : Seccion = {
    id : 0,
    seccion :" "
  }

  public guardarid(event: Event) : void{
    const captura = event.target as HTMLInputElement;
    this.seccion.id = Number.parseInt(captura.value);
  }
  public guardarSeccion(event: Event) : void{
    const captura = event.target as HTMLInputElement;
    this.seccion.seccion = captura.value;
    console.log(this.seccion.seccion);
  }

  public SaveAll(): void{
    //se crea una copia
    const copia: Seccion = {...this.seccion};
    //Emitir el evento
    this.rescate.emit(copia);
    //Vaciar el formulario
    this.seccion.id =  0;
    this.seccion.seccion = ' ';

  }

}

