import { MatInputModule } from '@angular/material/input';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent {


  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  });

  generos = [
    {id:1, nombre:"Drama"},
    {id:2, nombre:"Acción"},
    {id:3, nombre:"Comedia"}
  ];

  peliculas = [
        {
          titulo: 'Inside Out 2',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
        },
        {
          titulo: 'Moana 2',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
        },

        {
          titulo: 'Bad Boys: Ride or Die',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        },

        {
          titulo: 'Deadpool & Wolverine',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg'
        },
        {
          titulo: 'Oppenheimer',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg'
        },
        {
          titulo: 'The Flash',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/250px-The_Flash_%28film%29_poster.jpg'
        }
      ];
}
