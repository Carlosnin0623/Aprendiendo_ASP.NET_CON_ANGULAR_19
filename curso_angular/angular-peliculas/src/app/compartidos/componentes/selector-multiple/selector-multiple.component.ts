import { SelectorMultipleDTO } from './SelectorMultipleModelo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {


  @Input({required: true})
  Seleccionados!: SelectorMultipleDTO[];

  @Input({required: true})
  Noseleccionados!: SelectorMultipleDTO[];


  seleccionar(elemento: SelectorMultipleDTO, indice: number){
    this.Seleccionados.push(elemento);
    this.Noseleccionados.splice(indice,1);
  }

  deseleccionar(elemento: SelectorMultipleDTO, indice:number){
    this.Noseleccionados.push(elemento);
    this.Seleccionados.splice(indice, 1);
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.Noseleccionados);
    this.Noseleccionados.length = 0;
  }

  deseleccionarTodo(){
    this.Noseleccionados.push(...this.Seleccionados);
    this.Seleccionados.length = 0;
  }
}
