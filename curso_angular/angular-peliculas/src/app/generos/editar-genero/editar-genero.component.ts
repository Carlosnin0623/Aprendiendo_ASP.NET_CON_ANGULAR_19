import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-genero',
  imports: [],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

 /* Ya con esto estamos recibiendo el valor del id enviado por la url,
 solo debes tener en cuenta que deben tener el mismo nombre */
 @Input({transform: numberAttribute})
 id!: number

}
