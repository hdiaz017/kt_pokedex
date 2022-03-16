import { PokemonState } from '../interfaces/contextInterface';
import { Pokemon } from '../interfaces/FetchPokemonInterfaces';

type PokemonAction =
   | { type: 'addPokemons'; payload: Pokemon[] }
   | { type: 'toggleFavorite'; payload: { id: number } }
   | { type: 'updateSearch'; payload: string }
   | { type: 'addFavorite'; payload: Pokemon }
   | { type: 'removeFavorite'; payload: Pokemon };

export const pokemonReducer = (
   state: PokemonState,
   action: PokemonAction,
): PokemonState => {
   switch (action.type) {
      case 'addPokemons':
         return {
            ...state,
            pokemons: action.payload,
            isLoading: !state.isLoading,
         };
      case 'updateSearch':
         return { ...state, search: action.payload };
      case 'addFavorite':
         return { ...state, favorites: [...state.favorites, action.payload] };
      case 'removeFavorite':
         return {
            ...state,
            favorites: state.favorites.filter(
               (p) => p.id !== action.payload.id,
            ),
         };
      default:
         return state;
   }
};
