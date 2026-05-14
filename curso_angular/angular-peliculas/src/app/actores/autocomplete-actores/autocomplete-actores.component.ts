import { ActorAutoCompleteDTO, ActorCreacionDTO } from './../actores';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTable, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocomplete, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule, MatAutocompleteTrigger, MatOption],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {

  control = new FormControl();

  actores: ActorAutoCompleteDTO[] = [
    {id:1, nombre:'Tom Holland', personaje:'', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/960px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'},
    {id:2, nombre:'Tom Hanks', personaje:'', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/250px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg'},
    {id:3, nombre:'Samuel L. Jackson', personaje:'', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/250px-SamuelLJackson.jpg'},

  ]

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];


  columnasAMostrar = ['imagen','nombre','personaje','acciones'];

  @ViewChild(MatTable) table!: MatTable<ActorAutoCompleteDTO>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent){
   this.actoresSeleccionados.push(event.option.value);
   this.control.patchValue(''); /* Para limpiar el texbox del autocomplete */

   if(this.table != undefined){
    this.table.renderRows();
   }
  }

  eliminar(actor:ActorAutoCompleteDTO){
   const indice = this.actoresSeleccionados.findIndex((a: ActorAutoCompleteDTO) => a.id === actor.id);
   this.actoresSeleccionados.splice(indice, 1);
   this.table.renderRows();
  }
}
