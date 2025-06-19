import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './SHARED/COMPONENTS/cards/cards.component';
import { PokemonListComponent } from './FEATURES/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './FEATURES/pokemon-detail/pokemon-detail.component';
import { SearchbarComponent } from './SHARED/COMPONENTS/searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';

}
