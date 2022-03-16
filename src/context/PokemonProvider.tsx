import React, { useReducer } from 'react';
import { PokemonState } from '../interfaces/contextInterface';
import { PokemonContext } from './PokemonContext';
import { pokemonReducer } from '../reducers/pokemonReducer';
import { Pokemon } from '../interfaces/FetchPokemonInterfaces';

interface props {
   children: JSX.Element | JSX.Element[];
}

const Initial_State: PokemonState = {
   pokemons: [],
   favorites: [],
   search: '',
};

export const PokemonProvider = ({ children }: props) => {
   const [pokemonState, dispatch] = useReducer(pokemonReducer, Initial_State);
   const addPokemons = (pokemons: Pokemon[]) => {
      dispatch({ type: 'addPokemons', payload: pokemons });
   };
   const updateSearch = (search: string) => {
      dispatch({ type: 'updateSearch', payload: search });
   };

   return (
      <PokemonContext.Provider
         value={{
            pokemonState,
            addPokemons,
            updateSearch,
         }}
      >
         {children}
      </PokemonContext.Provider>
   );
};