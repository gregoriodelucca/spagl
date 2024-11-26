import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';  // Importando o AppComponent corretamente

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),  // Detecta mudanças de zona
    provideRouter(routes)  // Configuração das rotas
  ]
});
