import { Component, inject, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-cards',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  
getImageUrl(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  @Input() name!: string;
  @Input() url!: string;

  public pokemonService = inject(PokemonService);
  pokemons$ = this.pokemonService.getPokemon();


}
