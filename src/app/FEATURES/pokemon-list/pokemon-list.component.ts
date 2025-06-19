import { Component, inject } from '@angular/core';

import { map } from 'rxjs';
import { CardsComponent } from '../../SHARED/COMPONENTS/cards/cards.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { SearchbarComponent } from '../../SHARED/COMPONENTS/searchbar/searchbar.component';
import { PokemonService } from '../../CORE/SERVICES/pokemon.service';
import { PokemonList } from '../../CORE/MODELS/types';

@Component({
  selector: 'app-pokemon-list',
  imports: [CardsComponent, RouterLink, AsyncPipe, SearchbarComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  public pokemonService = inject(PokemonService);
  pokemons$ = this.pokemonService.getPokemons();
  searchTerm: string = '';

  onSearchChange(term: string): void {
    this.searchTerm = term.toLowerCase(); // Pour rendre la recherche insensible à la casse
  }

  filteredPokemons() {
    return this.pokemons$.pipe(
      // Import map from 'rxjs/operators' if not already imported
      map((pokemons: PokemonList[]) =>
        pokemons.filter((p) => p.name.toLowerCase().includes(this.searchTerm))
      )
    );
  }
}
