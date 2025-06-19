import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../CORE/SERVICES/pokemon.service';
import { PokemonDetail } from '../../CORE/MODELS/types';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent implements OnInit {
  private route = inject(ActivatedRoute); // Permet de lire les paramètres d'URL
  private pokemonService = inject(PokemonService); // Permet d’appeler l’API

  pokemon?: PokemonDetail; // Contiendra les données à afficher

  ngOnInit(): void {
    const idOrName = this.route.snapshot.paramMap.get('id'); // on récupère le ":id" de l'URL
    if (idOrName) {
      this.pokemonService
        .getPokemonDetails(idOrName)
        .subscribe((data) => (this.pokemon = data)); // on stocke le résultat dans notre propriété
    }
  }
}
