import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Pokemon } from '../types';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);
  readonly url = 'https://pokeapi.co/api/v2/pokemon?limit=50';

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<{ results: Pokemon[] }>(this.url).pipe(
      map(response => response.results))
  }

}
