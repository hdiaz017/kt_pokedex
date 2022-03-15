import { useState, useEffect } from 'react';

import { Pokemon } from '../interfaces/FetchPokemonInterfaces';
import {
   fetchAllPokemons,
   fetchAllDataPokemons,
} from '../utils/fetchAllPokemons';

export const usePokemons = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   // const pokemonData: FetchPokemonResponse[] = [];

   useEffect(() => {
      fetchAllPokemons().then((pokemons) => {
         setIsLoading(false);
         console.log(isLoading);
         // pokemons.map((pokemon) => {
         //    fetchAllDataPokemons(pokemon.name).then((data) => {
         //       pokemonData.push(data);
         //    });
         // });

         setPokemons(pokemons);
      });
   }, []);

   return {
      isLoading,
      pokemons,
   };
};
