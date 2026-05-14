import { SelectorMultipleDTO } from './../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';
import {primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { SelectorMultipleComponent } from "../../compartidos/componentes/selector-multiple/selector-multiple.component";
import { AutocompleteActoresComponent } from "../../actores/autocomplete-actores/autocomplete-actores.component";

@Component({
  selector: 'app-formulario-peliculas',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent, SelectorMultipleComponent, AutocompleteActoresComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent implements OnInit {
ngOnInit(): void {
  if(this.modelo !== undefined){
    this.form.patchValue(this.modelo);
  }
}


@Input({required:true})
generosNoSeleccionados!: SelectorMultipleDTO[];

@Input({required:true})
generosSeleccionados!: SelectorMultipleDTO[];


@Input({required:true})
cinesNoSeleccionados!: SelectorMultipleDTO[];

@Input({required:true})
cinesSeleccionados!: SelectorMultipleDTO[];


@Input()
modelo?: PeliculaDTO;

@Output()
posteoFormulario = new EventEmitter<PeliculaCreacionDTO>();


private formBuilder = inject(FormBuilder);

form = this.formBuilder.group({
  titulo: ['', {validators: [Validators.required, primeraLetraMayuscula()]}],
  fechaLanzamiento: new FormControl<Date | null>(null, {validators: [Validators.required]}),
  trailer: '',
  poster: new FormControl<File | string | null>(null)
});

archivoSeleccionado(file: File){
  this.form.controls.poster.setValue(file);
}

guardarCambios(){
  if(!this.form.valid){
     return;
  }

  const pelicula = this.form.value as PeliculaCreacionDTO;

  pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

  const generosIds = this.generosSeleccionados.map(val => val.llave);

  pelicula.generosIds = generosIds;

  const cinesIds = this.cinesSeleccionados.map(val => val.llave);
  pelicula.cinesIds = cinesIds;

  this.posteoFormulario.emit(pelicula);
}


obtenerErrorCampoTitulo(): string{
  let campo = this.form.controls.titulo;

  if(campo.hasError('required')){
    return 'El campo titulo es requerido';
  }

  if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
  }

  return '';
}

obtenerErrorCampoFechaLanzamiento(): string{
  let campo = this.form.controls.fechaLanzamiento;

  if (campo.hasError('required')) {
      return "El campo fecha lanzamiento es requerido";
  }
  
  return '';
}

}
