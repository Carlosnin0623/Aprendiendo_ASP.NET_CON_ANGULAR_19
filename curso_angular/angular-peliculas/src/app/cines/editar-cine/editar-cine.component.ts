import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cine';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {

@Input({transform: numberAttribute})
id!: number;

cine: CineDTO = {id:1, nombre:'Acrópolis', latitud: 18.469599401480618, longitud:-69.93891691862012};

guardarCambios(cine: CineCreacionDTO){
  console.log('Guardando cine', cine);
}
}
