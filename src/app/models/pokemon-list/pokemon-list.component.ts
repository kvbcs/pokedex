import { Component, inject } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  imports: [CardsComponent, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  public pokemonService = inject(PokemonService);
  pokemons$ = this.pokemonService.getPokemon();
}
