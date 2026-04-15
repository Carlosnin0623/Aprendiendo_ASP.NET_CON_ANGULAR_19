import { Component, Input} from '@angular/core';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-listado-peliculas',
  imports: [ListadoGenericoComponent, MatButtonModule, MatIconModule],
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

}
