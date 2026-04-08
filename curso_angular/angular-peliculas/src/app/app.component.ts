import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas';
  nombre = "Carlos Alberto"
  apellidos = "Nin Queliz";
  edad = 28;
  duplicarNumero(valor: number) : number {
    return valor * 2
  };
  peliculas = [
    {
      titulo: 'Spider-Man',
      fechaLanzamiento : new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Moana',
      fechaLanzamiento : new Date("2016-05-03"),
      precio: 300.99
    },
  ]
}
