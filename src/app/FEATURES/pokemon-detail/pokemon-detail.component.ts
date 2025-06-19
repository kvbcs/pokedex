// 📦 Imports nécessaires pour construire un composant Angular standalone
import { Component, OnInit, inject } from '@angular/core';
// Component → permet de définir un composant Angular
// OnInit → interface qui fournit une méthode ngOnInit appelée au démarrage du composant
// inject → méthode moderne Angular (depuis v16) pour injecter un service ou une dépendance sans utiliser de constructor

import { ActivatedRoute } from '@angular/router';
// ActivatedRoute → permet d'accéder aux paramètres de l’URL (ex : /pokemons/25 → "25")

import { CommonModule } from '@angular/common';
// CommonModule → donne accès aux directives Angular comme @if, @for, pipe titlecase, etc. dans le HTML standalone

import { PokemonService } from '../../CORE/SERVICES/pokemon.service';
// Service maison qui permet d’appeler l’API PokéAPI et de récupérer un Pokémon par ID ou nom

import { PokemonDetail } from '../../CORE/MODELS/types';
// Type TypeScript pour décrire ce que contient un Pokémon détaillé (stats, image, poids, etc.)

@Component({
  selector: 'app-pokemon-detail', // Balise HTML à utiliser si on voulait intégrer ce composant ailleurs

  standalone: true, // Angular standalone = ce composant est autonome, sans besoin d’être dans un module

  imports: [CommonModule], // On importe CommonModule pour activer @if, @for, etc. dans le template

  templateUrl: './pokemon-detail.component.html', // Lien vers le HTML associé
  styleUrl: './pokemon-detail.component.css', // Lien vers le CSS associé
})
export class PokemonDetailComponent implements OnInit {
  // 💉 On injecte le service de routing pour lire les paramètres dans l’URL
  private route = inject(ActivatedRoute);

  // 💉 On injecte notre service API pour appeler l’endpoint de détail d’un Pokémon
  private pokemonService = inject(PokemonService);

  // 📦 Variable qui contiendra les données du Pokémon affiché (remplie depuis l’API)
  pokemon?: PokemonDetail;

  // Méthode appelée automatiquement quand le composant est initialisé
  ngOnInit(): void {
    // 🔍 On récupère le paramètre "id" dans l’URL : /pokemons/:id
    // Ce peut être soit l’ID numérique (ex: 25), soit le nom (ex: "pikachu")
    const id = this.route.snapshot.paramMap.get('id');

    // ✅ Si l’ID est bien présent, on fait un appel API pour récupérer les données du Pokémon
    if (id) {
      this.pokemonService.getPokemonDetails(id).subscribe((data) => {
        console.log(data);
        
        // Quand la réponse de l’API arrive, on stocke les données dans "pokemon"
        this.pokemon = data;
      });
    }
  }
}
