// On rend ce service injectable dans toute l'application
import { Injectable } from '@angular/core';

// On importe HttpClient pour faire des appels HTTP
import { HttpClient } from '@angular/common/http';

// On importe Observable (pour la gestion de flux de données asynchrones) et map (pour transformer les données reçues)
import { Observable, map } from 'rxjs';
import {
  PokemonDetail,
  PokemonList,
  PokemonListResponse,
} from '../MODELS/types';

// Décorateur Angular : rend ce service disponible à l'échelle de l'application
@Injectable({
  providedIn: 'root', // permet d’éviter de devoir importer ce service dans app.config.ts
})
export class PokemonService {
  // URL de base vers l’API Pokémon (on y ajoutera /{name} ou ?limit=50 selon le besoin)
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  // On injecte HttpClient pour faire les appels HTTP à l’API
  constructor(private http: HttpClient) {}

  // 🧪 Méthode pour récupérer la liste des 50 premiers Pokémon
  getPokemons(): Observable<PokemonList[]> {
    const url = `${this.baseUrl}?limit=50`; // URL complète vers les 50 premiers Pokémon

    // On effectue un GET sur l'API et on transforme les résultats
    return this.http.get<PokemonListResponse>(url).pipe(
      map((response) =>
        response.results.map((pokemon) => {
          // On extrait l'ID depuis l’URL (qui est de la forme ".../pokemon/25/")
          const id = parseInt(
            pokemon.url.split('/').filter(Boolean).pop() || '0',
            10
          );

          // On retourne un objet enrichi : { name, url, id }
          return { ...pokemon, id };
        })
      )
    );
  }

  // 🔍 Méthode pour récupérer les détails d’un Pokémon (par nom ou ID)
  getPokemonDetails(nameOrId: string): Observable<PokemonDetail> {
    // Exemple d'URL générée : https://pokeapi.co/api/v2/pokemon/pikachu
    return this.http.get<PokemonDetail>(`${this.baseUrl}/${nameOrId}`);
  }
}
