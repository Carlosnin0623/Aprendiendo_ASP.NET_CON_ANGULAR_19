import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatDatepickerInput, MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { fechaNoPuedeSerFutura, primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormField, ReactiveFormsModule, MatInputModule, MatDatepickerInput, MatDatepicker, MatDatepickerToggle, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {
  ngOnInit(): void {
    
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

/*

Importante!


Debes instalar estas liberias para que el datepicker funcione, de lo contrario no se mostrara
nada en pantalla en el html 

1- npm i moment
2- npm i @angular/material-moment-adapter@19.2.19 depende de tu version de angular, como estoy en angular 19 instalo
esta

y en el archivo app.config.ts agregar este proveedor luego de instalar lo anterior

import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

agregar esto dentro de providers

provideMomentDateAdapter({
    parse: {
      dateInput: ['DD-MM-YYYY']
    },
    display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
  })
  
ya con esto podemos trabajar con el datepicker sin problemas y definir como mostramos las fechas
*/

  private formBuilder = inject(FormBuilder);


  @Input()
  modelo: ActorDTO | undefined;

  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();


  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula()]}],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()]
    }),
    foto: new FormControl<File | string | null>(null)
  });


   obtenerErrorCampoNombre(): string {
    let campo = this.form.controls.nombre;

    if (campo.hasError('required')) {
      return "El campo nombre es requerido"
    }

    if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return ""
  }

  obtenerErrorCampoFechaNacimiento(): string{
    let campo = this.form.controls.fechaNacimiento;

    if (campo.hasError('required')) {
      return "El campo fecha nacimiento es requerido";
    }

    if (campo.hasError('futuro')) {
      return campo.getError('futuro').mensaje;
    } 

    return "";
  }


  guardarCambios(){

    if(!this.form.valid){
       return;
    }

    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    this.posteoFormulario.emit(actor);

  }

  archivoSeleccionado(file:File){
     this.form.controls.foto.setValue(file);
  }


}
