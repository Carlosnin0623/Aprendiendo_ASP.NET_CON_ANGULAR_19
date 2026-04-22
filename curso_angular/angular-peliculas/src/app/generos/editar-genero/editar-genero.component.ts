import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

 /* Ya con esto estamos recibiendo el valor del id enviado por la url,
 solo debes tener en cuenta que deben tener el mismo nombre */
 @Input({transform: numberAttribute})
 id!: number;

 guardarCambios(genero: GeneroCreacionDTO){

   console.log('Editando el género', genero)
 }

}
