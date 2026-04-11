import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgOptimizedImage, ListadoGenericoComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent { /* Con OnInit le decimos lo que tiene que hacer automaticamente se llame al componente  */

  title = 'angular-peliculas';
  nombre = "Carlos Alberto"
  apellidos = "Nin Queliz";
  edad = 28;
  duplicarNumero(valor: number): number {
    return valor * 2
  };

  @Input({required: true})
  peliculas!: any[]; /* Con este simbolo !: le indicamos a Angular que el arreglo en algún momento recibira datos, que espere */


  agregarPelicula(){
    this.peliculas.push({
      titulo: 'Inception',
      fechaLanzamiento: new Date('2012-07-02'),
      precio: 500.00,
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg'
    })
  }

  removerPelicula(pelicula : any){
     const indice = this.peliculas.findIndex((peliculaActual : any) => peliculaActual.titulo === pelicula.titulo);
     this.peliculas.splice(indice, 1)
  }
}
