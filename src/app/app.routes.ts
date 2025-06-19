import { Routes } from '@angular/router';
import { PokemonListComponent } from './FEATURES/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './FEATURES/pokemon-detail/pokemon-detail.component';


export const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
];
