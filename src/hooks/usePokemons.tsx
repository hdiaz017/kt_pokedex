import { useState, useEffect, useContext } from 'react';

import { PokemonContext } from '../context/PokemonContext';
import { fetchAllPokemons } from '../utils/fetchAllPokemons';

export const usePokemons = () => {
   const [isLoading, setIsLoading] = useState(true);

   const { addPokemons } = useContext(PokemonContext);

   useEffect(() => {
      fetchAllPokemons().then((pokemons) => {
         setIsLoading(false);
         console.log('se llamo');

         addPokemons(pokemons);
      });
   }, []);

   return {
      isLoading,
   };
};
