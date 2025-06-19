Exercice Angular — Pokédex avec HTTPClient et Router

Objectifs pédagogiques :

- ✅ Utiliser HttpClient pour appeler une API REST

- ✅ Afficher dynamiquement une liste à partir d’un Observable

- Implémenter un système de tri

- Utiliser le Routing Angular pour naviguer vers une page de détails

- Passer un paramètre dynamique dans l’URL 

- ✅ Utiliser un service Angular pour centraliser les appels API 

## Contexte du projet
Tu vas créer un mini Pokédex Angular connecté à l’API publique https://pokeapi.co, capable d’afficher les Pokémons, de les trier, et de consulter leur fiche détaillée via une navigation.

​

## Étapes de réalisation
Afficher la liste des Pokémons
Endpoint utilisé : https://pokeapi.co/api/v2/pokemon?limit=50

​

Objectif : Afficher les 50 premiers Pokémons avec :

- ✅ Nom
- ✅ Image (à partir de l’ID ou via l’API) 👉 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
- Ajouter un tri dynamique
- Tri A → Z ou Z → A sur le nom
- Tri par type
- Utiliser un select ou des boutons radio
- Routing + Détails Pokémon
- ✅ Possibilité de faire une recherche par nom de pokemon
​

Quand on clique sur un Pokémon, rediriger vers /pokemon/:id et afficher :

Nom
ID
Image
Types
Taille / Poids
Statistiques de base
Abilities
​

🔗 Exemple d’URL pour un détail :

https://pokeapi.co/api/v2/pokemon/pikachu

​

📤Organisation des fichiers

PokemonService : méthodes getPokemons() et getPokemonDetails()

PokemonListComponent : appel de la liste, tri et navigation vers la page de détails

PokemonDetailComponent : appel getPokemonDetails(route.params.name) et affichage

​

✅ Résultat attendu Une app Angular simple, responsive, avec :

Liste de 50 Pokémons triables

Navigation vers les détails via /pokemons/:name

Comportement fluide, sans rechargement

Code structuré en service, composants, routing

consommer une API avec HTTPClient et naviguer avec le router

filtrage par type/nom

recherche par nom

Modalités pédagogiques
Réalisation en binome

Modalités d'évaluation
Qualité du code et explication du code lors de la restitution oral 

Livrables
Github

Critères de performance
Fonctionne bien et code propre 