import { PokemonState } from '../interfaces/contextInterface';
import { Pokemon } from '../interfaces/FetchPokemonInterfaces';

type PokemonAction =
   | { type: 'addPokemons'; payload: Pokemon[] }
   | { type: 'toggleFavorite'; payload: { id: number } };

export const pokemonReducer = (
   state: PokemonState,
   action: PokemonAction,
): PokemonState => {
   switch (action.type) {
      case 'addPokemons':
         return { ...state, pokemons: action.payload };

      default:
         return state;
   }
};
