// On importe le type "Routes" depuis Angular RouterAdd commentMore actions
// Cela permet de définir une liste d'objets route pour configurer la navigation entre les composants
import { Routes } from '@angular/router';
import { PokemonListComponent } from './FEATURES/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './FEATURES/pokemon-detail/pokemon-detail.component';
// Déclaration du tableau de routes pour l’applicationAdd commentMore actions
// Chaque objet dans le tableau correspond à une URL et au composant Angular à afficher

export const routes: Routes = [
  // 🏠 Route racine → quand l’utilisateur visite "/", on affiche la liste des PokémonAdd commentMore actions
  { path: '', component: PokemonListComponent },

  // 🔍 Route dynamique → quand l’utilisateur visite "/pokemons/25" (ou n'importe quel ID ou nom),
  // on affiche le détail du Pokémon dans le composant PokemonDetailComponent
  { path: 'pokemon/:id', component: PokemonDetailComponent },
];
