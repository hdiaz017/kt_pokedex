import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';

export const SearchPokemon = () => {
   const navigate = useNavigate();
   const { pokemonState } = useContext(PokemonContext);
   const { pokemons, search } = pokemonState;

   const getPokemonsByName = (name: string) => {
      if (name === '') {
         return;
      }
      return pokemons.filter((p) =>
         p.name.toLowerCase().includes(name.toLowerCase()),
      );
   };

   const filteredPokemons = getPokemonsByName(search);

   return <div>{/* <div className='poke_cards'>{pokeCards}</div> */}</div>;
};
