import { createContext } from 'react';
import { PokemonState } from '../interfaces/contextInterface';
import { Pokemon } from '../interfaces/FetchPokemonInterfaces';

export type PokemonContextProps = {
   pokemonState: PokemonState;
   addPokemons: (pokemons: Pokemon[]) => void;
   updateSearch: (search: string) => void;
};

export const PokemonContext = createContext<PokemonContextProps>(
   {} as PokemonContextProps,
);
