// On importe les outils Angular nécessaires

import { Component, EventEmitter, Output } from '@angular/core';
// Component → décorateur pour déclarer un composant
// EventEmitter → permet d’émettre un événement vers le composant parent
// Output → décorateur pour déclarer un événement accessible depuis l’extérieur du composant

import { FormsModule } from '@angular/forms';
// FormsModule → utilisé ici si on fait de la liaison [(ngModel)], mais non indispensable ici car on utilise (input)


@Component({
  selector: 'app-searchbar', // Nom de la balise HTML du composant : <app-searchbar>

  standalone: true,          // Le composant est autonome (Angular 15+), pas besoin de module

  imports: [FormsModule],    // Modules nécessaires à ce composant (ici FormsModule — optionnel dans ce cas)

  templateUrl: './searchbar.component.html', // Fichier HTML associé au composant
  styleUrl: './searchbar.component.css',     // Fichier CSS pour le style du composant
})


export class SearchbarComponent {
  // ✅ Création d’un événement "searchChange" que le composant parent peut écouter
  // Le type de données envoyées est "string" → la chaîne tapée par l’utilisateur
  @Output() searchChange = new EventEmitter<string>();



  // ✅ Méthode appelée à chaque frappe clavier dans le champ <input>
  handleInput(event: Event): void {
    // On récupère la vraie valeur tapée par l’utilisateur à partir de l’élément DOM
    const target = event.target as HTMLInputElement;

    // Si l’utilisateur a tapé quelque chose, on récupère la valeur, sinon on met une chaîne vide
    const value = target?.value || '';

    // On "émet" cette valeur vers le composant parent (PokemonListComponent)
    // Cela déclenchera (searchChange)="onSearchChange($event)" côté parent
    this.searchChange.emit(value);
  }
}

