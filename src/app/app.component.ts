import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './models/cards/cards.component';
import { PokemonListComponent } from './models/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './models/pokemon-detail/pokemon-detail.component';
import { SearchbarComponent } from './models/searchbar/searchbar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardsComponent, PokemonListComponent,PokemonDetailComponent, SearchbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';

}
