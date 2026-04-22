import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';


@Component({
  selector: 'app-crear-generos',
  imports: [FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  private router = inject(Router);

  guardarCambios(genero: GeneroCreacionDTO) {

    // Guardar Cambios
    // .... Guardar cambios

    // Esta linea lo que va hacer cuando se le de al boton guardar nos rediririgira a la ruta /generos
    // this.router.navigate(['/generos']);
     console.log('Creando el género',genero);
  }

}
