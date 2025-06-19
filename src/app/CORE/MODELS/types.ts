// ✅ Représente un élément de la liste des Pokémon (utilisé dans le composant liste)
export interface PokemonList {
  name: string; // 🏷️ Nom du Pokémon (ex: "pikachu")
  url: string;  // 🔗 URL complète vers les détails de ce Pokémon
  id: number;   // 🆔 Identifiant du Pokémon (extrait manuellement depuis l'URL)
}

// ✅ Réponse brute de l'API PokéAPI lorsqu'on appelle la liste de Pokémon (/pokemon)
export type PokemonListResponse = {
  count: number; // 📊 Nombre total de Pokémon dans la base
  results: { 
    name: string; // 🏷️ Nom du Pokémon
    url: string;  // 🔗 URL complète vers son détail
  }[];
}

// ✅ Interface complète pour les détails d’un Pokémon (/pokemon/{name ou id})
export interface PokemonDetail {
  id: number;      // 🆔 Identifiant du Pokémon
  name: string;    // 🏷️ Nom du Pokémon
  height: number;  // 📏 Taille (en décimètres selon l'API)
  weight: number;  // ⚖️ Poids (en hectogrammes selon l'API)

  // 🧬 Liste des types (ex: [{ type: { name: 'electric' } }])
  types: {
    type: {
      name: string; // nom du type (ex: "fire", "water", etc.)
    };
  }[];

  // 🖼️ Objets contenant les différentes images (sprites)
  sprites: {
    front_default: string; // sprite de face par défaut
  };

  // 📊 Liste des statistiques de base (HP, attack, defense, etc.)
  stats: {
    base_stat: number; // valeur de la statistique (ex: 80)
    stat: {
      name: string;     // nom de la statistique (ex: "attack")
    };
  }[];

  // 🔮 Capacités spéciales (ex: "static", "overgrow")

  abilities: {
    ability: {
      name: string; // nom de la capacité
    };
  }[];
}

// ✅ Élément enrichi utilisé dans notre app pour afficher la liste + les types
export interface PokemonListItem {
  name: string; // 🏷️ Nom du Pokémon
  url: string;  // 🔗 URL vers les détails du Pokémon
  id: number;   // 🆔 ID extrait de l’URL

  // 🧬 Types du Pokémon (ex: [{ type: { name: 'grass' } }])
  // On rend cette propriété optionnelle car elle est ajoutée manuellement après appel
  types?: { type: { name: string } }[];
}

// ✅ Interface utilitaire pour typer un objet représentant un type de Pokémon
export interface PokemonType {
  type: { 
    name: string; // nom du type (ex: "electric")
  };
}

