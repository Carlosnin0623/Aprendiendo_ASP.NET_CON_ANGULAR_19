import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';


/* Aqui es donde se definen los proveedores

withComponentInputBinding(): Esto permitira recibir capturar los parametros enviados
por la url, y poder recogerlos en el respectivo componente

*/

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding())]
};
