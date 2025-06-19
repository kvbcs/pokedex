export interface PokemonList {
  name: string; // nom du Pokémon (ex: "pikachu")
  url: string; // URL complète vers le détail de ce Pokémon
  id: number; // ID qu'on extrait nous-mêmes à partir de l'URL
}

// Interface pour les détails d’un Pokémon (quand on appelle /pokemon/{name ou id})
export interface PokemonDetail {
  id: number; // ID du Pokémon
  name: string; // Nom du Pokémon
  height: number; // Taille (en décimètres dans l’API)
  weight: number; // Poids (en hectogrammes dans l’API)

  // Liste des types du Pokémon (ex: [{ type: { name: 'electric' } }])
  types: {
    type: {
      name: string; // nom du type (fire, grass, etc.)
    };
  }[];

  // Objets contenant les URLs des sprites/images du Pokémon
  sprites: {
    front_default: string; // image principale par défaut
  };

  // Statistiques de base (ex: HP, Attack, Defense)
  stats: {
    base_stat: number; // valeur de la stat (ex: 50)
    stat: {
      name: string; // nom de la stat (ex: "attack")
    };
  }[];

  // Capacités du Pokémon (ex: "static", "blaze"...)
  abilities: {
    ability: {
      name: string; // nom de la capacité
    };
  }[];
}
