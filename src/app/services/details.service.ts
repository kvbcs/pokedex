import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Pokemon } from '../types';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private http = inject(HttpClient);
  
  private id: string;

  private url: string; // Add your API endpoint here
  
  constructor() {
    // Replace 'url' with the actual URL string you want to parse
    const url = 'https://pokeapi.co/api/v2/pokemon/1'; // Example URL, replace as needed
    this.id = url.split('/').filter(Boolean).pop() || '';
    this.url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
  }
  

  getDetails(): Observable<Pokemon[]> {
    return this.http.get<{ results: Pokemon[] }>(this.url).pipe(
      map(response => response.results))
  }

}
