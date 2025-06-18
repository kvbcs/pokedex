import { Component, inject, Input } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;

  public pokemonService = inject(PokemonService);
  pokemons$ = this.pokemonService.getPokemon();
}
