// types.ts

// Liste paginée de Pokémon
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

// Sprite Pokémon
export interface PokemonSprites {
  front_default: string | null;
  other?: {
    ['official-artwork']?: { front_default: string | null };
  };
}

// Type Pokémon (pour la liste et le détail)
export interface PokemonType {
  slot: number;
  type: Pokemon;
}

// Abilities
export interface PokemonAbility {
  ability: Pokemon;
  is_hidden: boolean;
  slot: number;
}

// Statistiques
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: Pokemon;
}

// Réponse de détail d’un Pokémon
export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

// Réponse du listing (limit=50)
export interface PokemonListResponse extends PokemonList {}
