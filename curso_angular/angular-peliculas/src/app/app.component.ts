import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
