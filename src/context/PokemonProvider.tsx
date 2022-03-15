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
};

export const PokemonProvider = ({ children }: props) => {
   const [pokemonState, dispatch] = useReducer(pokemonReducer, Initial_State);
   const addPokemons = (pokemons: Pokemon[]) => {
      dispatch({ type: 'addPokemons', payload: pokemons });
   };

   return (
      <PokemonContext.Provider
         value={{
            pokemonState,
            addPokemons,
         }}
      >
         {children}
      </PokemonContext.Provider>
   );
};
