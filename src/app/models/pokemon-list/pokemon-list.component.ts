import { Component, inject } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { AsyncPipe } from '@angular/common';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { Pokemon } from '../../types';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  imports: [CardsComponent, RouterLink, AsyncPipe, SearchbarComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  public pokemonService = inject(PokemonService);
pokemons$ = this.pokemonService.getPokemon();
searchTerm: string = '';

onSearchChange(term: string): void {
  this.searchTerm = term.toLowerCase(); // Pour rendre la recherche insensible à la casse
}

 filteredPokemons() {
  return this.pokemons$.pipe(
    // Import map from 'rxjs/operators' if not already imported
    map((pokemons: Pokemon[]) =>
      pokemons.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm)
      )
    )
  );
}

}
