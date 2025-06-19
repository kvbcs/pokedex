import { Component, computed, effect, signal, inject } from '@angular/core';
import { PokemonService } from '../../CORE/SERVICES/pokemon.service';
import { PokemonList } from '../../CORE/MODELS/types';
import { SearchbarComponent } from '../../SHARED/COMPONENTS/searchbar/searchbar.component';
import { CardsComponent } from '../../SHARED/COMPONENTS/cards/cards.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [SearchbarComponent, CardsComponent, RouterLink, AsyncPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  private pokemonService = inject(PokemonService);

  pokemons = signal<PokemonList[]>([]);
  searchTerm = signal<string>('');

  constructor() {
    this.pokemonService.getPokemons().subscribe(this.pokemons.set);
  }

  onSearchChange(term: string): void {
    this.searchTerm.set(term.toLowerCase());
  }

  filteredPokemons = computed(() =>
    this.pokemons().filter((p) =>
      p.name.toLowerCase().includes(this.searchTerm())
    )
  );
}
