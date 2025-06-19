// 📦 Import Angular
import { Injectable } from '@angular/core';

// 🌐 Import pour faire les appels HTTP
import { HttpClient } from '@angular/common/http';

// 📊 Import RxJS pour gérer plusieurs appels API en parallèle
import { forkJoin, map, Observable, switchMap } from 'rxjs';

// 📐 Import de nos types définis dans types.ts
import { PokemonListItem, PokemonDetail } from '../MODELS/types';

@Injectable({
  providedIn: 'root' // Service injecté automatiquement dans toute l'application
})
export class PokemonService {

  
  // URL de base pour récupérer la liste des 50 premiers Pokémon
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';

  constructor(private http: HttpClient) {}

  // 🔁 Méthode pour récupérer la liste complète avec types enrichis
  getPokemons(): Observable<PokemonListItem[]> {
    return this.http.get<{ results: { name: string; url: string }[] }>(this.apiUrl).pipe(
      // ⛓️ switchMap : après avoir reçu la liste de base, on appelle les détails de chaque Pokémon
      switchMap((res) => {
        const requests = res.results.map((pokemon, index) =>
          this.http.get<PokemonDetail>(pokemon.url).pipe(
            map((details) => ({
              name: details.name,
              url: pokemon.url,
              id: index + 1, // ou details.id
              types: details.types // ✅ On récupère les types à partir du détail
            }))
          )
        );
        // 🧠 forkJoin : attend que toutes les requêtes soient terminées
        return forkJoin(requests);
      })
    );
  }

  // 🔍 Méthode pour récupérer un Pokémon en détail via son ID ou son nom
  getPokemonDetails(nameOrId: string): Observable<PokemonDetail> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
    return this.http.get<PokemonDetail>(url);
  }
}
