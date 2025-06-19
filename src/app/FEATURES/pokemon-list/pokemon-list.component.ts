// 🌟 Import des outils nécessaires à la création du composant
import { Component, computed, signal, inject } from '@angular/core';
// - computed : crée des valeurs calculées réactives
// - signal : crée des états réactifs (comme useState en React)
// - inject : permet d'injecter un service Angular sans constructor

import { PokemonService } from '../../CORE/SERVICES/pokemon.service';
// 🔌 Service personnalisé pour interroger l’API PokéAPI

import { PokemonListItem, PokemonType } from '../../CORE/MODELS/types';
// 📦 Interfaces pour typer correctement les données reçues de l'API

import { SearchbarComponent } from '../../SHARED/COMPONENTS/searchbar/searchbar.component';
// 🔍 Composant standalone pour la barre de recherche

import { CardsComponent } from '../../SHARED/COMPONENTS/cards/cards.component';
// 🧩 Composant standalone pour afficher une carte Pokémon

import { RouterLink } from '@angular/router';
// 🧭 Permet de créer des liens vers d'autres routes dans l'app

import { AsyncPipe, CommonModule } from '@angular/common';
// 📚 CommonModule : directives de base (@for, @if, etc.)
// 🔄 AsyncPipe : utile pour les Observables (ici précaution pour un usage éventuel)


// 🧱 Déclaration du composant Angular standalone
@Component({
  selector: 'app-pokemon-list', // 🔖 Nom de la balise HTML personnalisée
  standalone: true, // 🚀 Pas besoin d’être déclaré dans un module Angular
  imports: [
    CommonModule,        // ✅ Nécessaire pour les directives Angular de base
    SearchbarComponent,  // 🔍 Composant barre de recherche
    CardsComponent,      // 🧩 Composant carte de Pokémon
    RouterLink,          // 🔗 Pour faire des <a routerLink="">
    AsyncPipe            // 🔄 Pour les | async (optionnel ici)
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  // 💉 Injection du service Pokémon
  private pokemonService = inject(PokemonService);

  // 📦 Signal contenant tous les Pokémon récupérés
  pokemons = signal<PokemonListItem[]>([]);

  // 🕵️ Signal contenant le terme de recherche saisi par l’utilisateur
  searchTerm = signal<string>('');

  // 🎯 Signal contenant les types sélectionnés dans le filtre (multi-sélection)
  selectedTypes = signal<string[]>([]);

  // 🔀 Signal contenant le critère de tri sélectionné (nom/id)
  sortBy = signal<'name-asc' | 'name-desc' | 'id-asc' | 'id-desc'>('id-asc');

  // 📚 Liste des types Pokémon disponibles (en dur ici)
  types = [
    'normal', 'fire', 'water', 'grass', 'electric',
    'ice', 'fighting', 'poison', 'ground', 'flying',
    'psychic', 'bug', 'rock', 'ghost', 'dragon',
    'dark', 'steel', 'fairy'
  ];

  // 🔁 Lors de l’instanciation du composant, on appelle le service pour récupérer les Pokémon
  constructor() {
    this.pokemonService.getPokemons().subscribe(this.pokemons.set);
  }

  // 🖊️ Méthode appelée à chaque fois que le texte de la recherche change
  onSearchChange(term: string): void {
    this.searchTerm.set(term.toLowerCase()); // on garde tout en minuscule pour simplifier la recherche
  }

  // 🔁 Méthode appelée à chaque changement dans le filtre multi-type
  onMultiTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;

    // 🔄 Récupération des valeurs sélectionnées
    const selected = Array.from(select.selectedOptions).map(opt => opt.value);

    // 🔧 Mise à jour des types sélectionnés
    this.selectedTypes.set(selected);
  }

  // 🧽 Réinitialise les filtres de recherche et de type
  resetFilters(): void {
    this.searchTerm.set('');
    this.selectedTypes.set([]);
  }

  // 🔄 Mise à jour du critère de tri quand l’utilisateur change la sélection
  onSortChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.sortBy.set(select.value as any); // `as any` utilisé pour bypasser TS
  }

  // 🧠 Valeur calculée automatiquement à jour quand les signaux changent
  // Elle contient la liste finale filtrée et triée à afficher
  filteredPokemons = computed(() =>
    this.pokemons()
      .filter((p) => {
        // 🔍 Vérifie si le nom du Pokémon correspond à la recherche
        const matchesSearch = p.name.toLowerCase().includes(this.searchTerm());

        // 🧬 Vérifie si le Pokémon possède au moins un des types sélectionnés
        const matchesType = this.selectedTypes().length === 0
          ? true
          : p.types?.some((t: PokemonType) => this.selectedTypes().includes(t.type.name));

        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        // 📊 Applique le tri sélectionné par l’utilisateur
        switch (this.sortBy()) {
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          case 'id-asc':
            return a.id - b.id;
          case 'id-desc':
            return b.id - a.id;
          default:
            return 0; // Cas par défaut, ne fait rien
        }
      })
  );
}
