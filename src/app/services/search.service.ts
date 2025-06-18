import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Pokemon } from '../types';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

 
   private http = inject(HttpClient);
   
   private name: string ='';
   private url!: string;

   
   constructor() {
     // Replace 'url' with the actual URL string you want to parse
     const url = `https://pokeapi.co/api/v2/pokemon/${this.name}`; // Example URL, replace as needed
     this.name = url.split('/').filter(Boolean).pop() || '';
   }
   
   getDetails(): Observable<Pokemon[]> {
     return this.http.get<{ results: Pokemon[] }>(this.url).pipe(
       map(response => response.results))
   }
 
 }
