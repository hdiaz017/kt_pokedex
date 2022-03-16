/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';

import { PokemonContext } from '../context/PokemonContext';
import { fetchAllPokemons } from '../utils/fetchAllPokemons';

export const usePokemons = () => {
   const { addPokemons } = useContext(PokemonContext);

   useEffect(() => {
      fetchAllPokemons().then((pokemons) => {
         console.log('se llamo');

         addPokemons(pokemons);
      });
   }, []);
};
