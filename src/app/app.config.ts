import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideZoneChangeDetection } from '@angular/core';
import { RouterModule } from '@angular/router';  // Adicionando o RouterModule

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    RouterModule // Importando RouterModule
  ]
};
