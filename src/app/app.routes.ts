import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './models/cards/cards.component';
import { PokemonListComponent } from './models/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './models/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent }
];
