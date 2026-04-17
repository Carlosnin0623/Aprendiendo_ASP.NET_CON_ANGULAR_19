import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

 router = inject(Router);

 guardarCambios(){
  // .... Guardar cambios
  
    // Esta linea lo que va hacer cuando se le de al boton guardar nos rediririgira a la ruta /generos
    this.router.navigate(['/generos']);
 }

}
