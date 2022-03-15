import { useState, useEffect, useContext } from 'react';

import { Pokemon } from '../interfaces/FetchPokemonInterfaces';
import { PokemonContext } from '../context/PokemonContext';
import {
   fetchAllPokemons,
   fetchAllDataPokemons,
} from '../utils/fetchAllPokemons';

export const usePokemons = () => {
   const [isLoading, setIsLoading] = useState(true);
   // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   // const pokemonData: FetchPokemonResponse[] = [];
   const { addPokemons } = useContext(PokemonContext);

   useEffect(() => {
      fetchAllPokemons().then((pokemons) => {
         setIsLoading(false);
         console.log(isLoading);
         // pokemons.map((pokemon) => {
         //    fetchAllDataPokemons(pokemon.name).then((data) => {
         //       pokemonData.push(data);
         //    });
         // });

         addPokemons(pokemons);
      });
   }, []);

   return {
      isLoading,
   };
};
