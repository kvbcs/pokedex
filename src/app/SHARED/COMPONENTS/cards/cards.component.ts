// On importe les décorateurs et outils Angular nécessaires
import { Component, inject, Input } from '@angular/core';
// @Component → pour déclarer un composant Angular
// inject → pour injecter un service (version moderne Angular 16+)
// @Input → permet de recevoir des données depuis le composant parent (comme PokemonListComponent)

import { PokemonService } from '../../../CORE/SERVICES/pokemon.service';
// On importe le service qui permet de faire des appels API vers la PokéAPI

import { Router } from '@angular/router'; 


@Component({
  selector: 'app-cards', // Nom de la balise HTML pour ce composant → <app-cards>

  // Angular 18+ standalone : ici tu pourrais ajouter CommonModule, RouterLink, etc. si nécessaire
  imports: [],

  templateUrl: './cards.component.html', // Fichier HTML associé à ce composant
  styleUrls: ['./cards.component.css']   // Fichier CSS associé à ce composant
})



export class CardsComponent {
  
  // 🔧 Méthode utilitaire pour générer une URL d’image à partir de l’URL API reçue
  getImageUrl(url: string): string {
    // On découpe l'URL en segments séparés par des slashs ("/"), on filtre les chaînes vides
    // .pop() récupère le dernier segment, qui correspond à l’ID du Pokémon
    const id = url.split('/').filter(Boolean).pop();

    // On reconstruit l’URL de l’image à partir de l’ID
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }


  
    // 🔽 Propriétés @Input → ces données sont envoyées depuis le composant parent
  @Input() name!: string; // Le nom du Pokémon
  @Input() url!: string;  // Son URL vers l’API

  // 💉 Injection du service Pokémon (version moderne avec inject() au lieu de constructor)
  public pokemonService = inject(PokemonService);

  // 👇 Observable contenant les 50 pokémons (non utilisé ici — peut être supprimé si inutile)
  pokemons$ = this.pokemonService.getPokemons();


  public router = inject(Router); // injection du router

// Méthode appelée quand on clique sur la carte
goToDetail(): void {
  const id = this.url.split('/').filter(Boolean).pop();
  this.router.navigate(['/pokemons', id]);
}

}

