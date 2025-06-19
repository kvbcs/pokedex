// 📦 Import de l'interface principale de configuration d'une application Angular standaloneAdd commentMore actions
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// ApplicationConfig → structure Angular qui permet de configurer l'app (standalone, sans AppModule)
// provideZoneChangeDetection → option avancée de performance liée au cycle de détection de changements

import { provideRouter } from '@angular/router';
// Fournisseur Angular pour activer le système de routing avec la configuration des routes (définies dans app.routes)

import { provideHttpClient } from '@angular/common/http';
// Fournisseur Angular pour activer les appels HTTP dans l'application (HttpClient)

// On importe la configuration des routes depuis le fichier app.routes.ts
import { routes } from './app.routes';

// Déclaration de la configuration de l'application Angular
export const appConfig: ApplicationConfig = {
  providers: [
    // 🧠 Optimisation : évite les détections de changement inutiles en regroupant plusieurs événementsAdd commentMore actions
    provideZoneChangeDetection({ eventCoalescing: true }),

    // 🔁 Fournisseur du système de routing → active la navigation Angular avec les routes définies
    provideRouter(routes),

    // 🌐 Fournisseur du module HTTP → permet d'utiliser HttpClient dans les services
    provideHttpClient(),
  ],
};
