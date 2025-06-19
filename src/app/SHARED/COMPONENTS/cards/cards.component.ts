import { Component, inject, Input } from '@angular/core';
import { PokemonService } from '../../../CORE/SERVICES/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() name!: string;
  @Input() url!: string;
  @Input() id!: number;

  private router = inject(Router);

  //Fonction pour extraire l'id de l'url
  getIdFromUrl(url: string): number {
    return Number(url.split('/').filter(Boolean).pop());
  }

  getImageUrl(url: string): string {
    const id = this.getIdFromUrl(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  goToDetails(): void {
    const id = this.getIdFromUrl(this.url);
    console.log('allo', id);
    this.router.navigate(['/pokemon/', id]);
  }

  public pokemonService = inject(PokemonService);
  pokemons$ = this.pokemonService.getPokemons();
}
