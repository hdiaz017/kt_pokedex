import { Pokemon } from './FetchPokemonInterfaces';

export interface PokemonState {
   pokemons: Pokemon[];
   favorites: Pokemon[];
   search: string;
   isLoading: boolean;
}
