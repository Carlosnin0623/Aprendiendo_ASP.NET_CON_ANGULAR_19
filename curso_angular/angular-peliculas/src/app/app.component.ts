<<<<<<< Updated upstream

import { MenuComponent } from './compartidos/componentes/menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";
import { MatButtonModule } from '@angular/material/button';
=======
import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
>>>>>>> Stashed changes


@Component({
  selector: 'app-root',
<<<<<<< Updated upstream
  imports: [ListadoPeliculasComponent, MenuComponent, MatButtonModule],
=======
  imports: [RouterOutlet, MenuComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
