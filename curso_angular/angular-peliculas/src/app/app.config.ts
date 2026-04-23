import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { provideMomentDateAdapter } from '@angular/material-moment-adapter';


/* Aqui es donde se definen los proveedores

withComponentInputBinding(): Esto permitira recibir capturar los parametros enviados
por la url, y poder recogerlos en el respectivo componente

*/

export const appConfig: ApplicationConfig = {
  // En providers: Debes meter todos tus proveedores

  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withComponentInputBinding()),
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } },
  // Configurando una proveedor de fechas
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
  ] // Fin providers
};
