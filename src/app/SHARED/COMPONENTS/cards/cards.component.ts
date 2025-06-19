// On importe les décorateurs et outils Angular nécessaires
import { Component, inject, Input } from '@angular/core';
// @Component → pour déclarer un composant Angular
// inject → pour injecter un service (version moderne Angular 16+)
// @Input → permet de recevoir des données depuis le composant parent (comme PokemonListComponent)Add commentMore actions

import { PokemonService } from '../../../CORE/SERVICES/pokemon.service';
// On importe le service qui permet de faire des appels API vers la PokéAPI

import { Router } from '@angular/router';

@Component({
  selector: 'app-cards', // Nom de la balise HTML pour ce composant → <app-cards>
  standalone: true, //Rend le composant indépendant d'un parent
  // Angular 18+ standalone : ici tu pourrais ajouter CommonModule, RouterLink, etc. si nécessaire
  imports: [],

  templateUrl: './cards.component.html', // Fichier HTML associé à ce composant
  styleUrls: ['./cards.component.css'], // Fichier CSS associé à ce composant
})
export class CardsComponent {
  // 🔽 Propriétés @Input → ces données sont envoyées depuis le composant parentAdd commentMore actions
  @Input() name!: string; // Le nom du Pokémon
  @Input() url!: string; // Son URL vers l’API
  @Input() id!: number;

  private router = inject(Router);

  //Fonction pour extraire l'id de l'url
  getIdFromUrl(url: string): number {
    // On découpe l'URL en segments séparés par des slashs ("/"), on filtre les chaînes videsAdd commentMore actions
    // .pop() récupère le dernier segment, qui correspond à l’ID du Pokémon
    return Number(url.split('/').filter(Boolean).pop());
  }
  // 🔧 Méthode utilitaire pour générer une URL d’image à partir de l’URL API reçue
  getImageUrl(url: string): string {
    const id = this.getIdFromUrl(url);
    // On reconstruit l’URL de l’image à partir de l’ID
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  goToDetails(): void {
    this.router.navigate(['/pokemon', this.id]);
  }

  // 💉 Injection du service Pokémon (version moderne avec inject() au lieu de constructor)Add commentMore actions
  public pokemonService = inject(PokemonService);

  // 👇 Observable contenant les 50 pokémons (non utilisé ici — peut être supprimé si inutile)
  pokemons$ = this.pokemonService.getPokemons();
}
