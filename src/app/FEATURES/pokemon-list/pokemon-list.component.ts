// Import de ce dont on a besoin pour construire le composant
import { Component, computed, effect, signal, inject } from '@angular/core';
// computed → pour créer une valeur dérivée automatiquement à jour
// effect → (non utilisé ici) permet de déclencher un effet secondaire quand un signal change
// signal → sert à créer des variables réactives (comme useState en React)
// inject → permet d’injecter un service ou une dépendance (comme un constructor mais version simplifiée Angular 16+)

import { PokemonService } from '../../CORE/SERVICES/pokemon.service';
// On importe le service qui va nous permettre d’appeler l’API pour récupérer les Pokémons

import { PokemonList } from '../../CORE/MODELS/types';
// On importe le type "PokemonList" (probablement une interface décrivant { name, url, id })

import { SearchbarComponent } from '../../SHARED/COMPONENTS/searchbar/searchbar.component';
// Composant personnalisé : champ de recherche

import { CardsComponent } from '../../SHARED/COMPONENTS/cards/cards.component';
// Composant personnalisé : carte affichant 1 Pokémon

import { RouterLink } from '@angular/router';
// Permet d’utiliser la directive [routerLink] dans le HTML si besoin

import { AsyncPipe } from '@angular/common';
// Permettrait d’utiliser `| async` dans le HTML (même s’il n’est pas encore utilisé ici)


// Déclaration du composant Angular
@Component({
  selector: 'app-pokemon-list', // Nom de la balise HTML utilisée pour ce composant
  standalone: true,             // Angular 15+ : composant autonome sans besoin d’un module parent

  // Liste des composants/autres fonctionnalités utilisés dans le template HTML de ce composant
  imports: [SearchbarComponent, CardsComponent, RouterLink, AsyncPipe],

  templateUrl: './pokemon-list.component.html', // Lien vers le HTML
  styleUrls: ['./pokemon-list.component.css'],  // Lien vers le CSS
})

export class PokemonListComponent {
  // Injection du service PokemonService (façon Angular 16+)
  private pokemonService = inject(PokemonService);

  // Signal qui contiendra la liste des Pokémon
  // Un signal est une variable observable/réactive → si sa valeur change, Angular le détecte
  pokemons = signal<PokemonList[]>([]);

  // Signal qui contient ce que l’utilisateur tape dans la barre de recherche
  searchTerm = signal<string>('');


    // Constructeur appelé automatiquement à la création du composant
  constructor() {
    // On appelle le service → getPokemons() retourne un Observable
    // .subscribe() permet de réagir quand les données arrivent
    // this.pokemons.set(...) met à jour le signal avec les résultats
    this.pokemonService.getPokemons().subscribe(this.pokemons.set);
  }


  // Méthode appelée quand l’utilisateur tape dans la barre de recherche
  // Elle met à jour le signal searchTerm avec le mot tapé en minuscule (pour faciliter la comparaison)
  onSearchChange(term: string): void {
    this.searchTerm.set(term.toLowerCase());
  }


  // computed() crée une valeur dérivée automatiquement à jour
  // Ici : on filtre les Pokémon selon ce que l’utilisateur a tapé dans la recherche
  // Chaque fois que searchTerm() ou pokemons() change → cette fonction est recalculée
  filteredPokemons = computed(() =>
    this.pokemons().filter((p) =>
      p.name.toLowerCase().includes(this.searchTerm())
    )
  );
}

