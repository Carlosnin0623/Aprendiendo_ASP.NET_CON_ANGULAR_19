import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatDatepickerInput, MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormField, ReactiveFormsModule, MatInputModule, MatDatepickerInput, MatDatepicker, MatDatepickerToggle],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent {

  private formBuilder = inject(FormBuilder);


  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula]}],
    fechaNacimiento: new FormControl<Date | null>(null)
  })
}
