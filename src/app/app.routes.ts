import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './SHARED/COMPONENTS/cards/cards.component';
import { PokemonListComponent } from './FEATURES/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './FEATURES/pokemon-detail/pokemon-detail.component';
import { SearchbarComponent } from './SHARED/COMPONENTS/searchbar/searchbar.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  { path: 'searchbar', component: SearchbarComponent }
];
