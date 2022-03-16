import React from 'react';

import { Card } from '../Card/Card';
import './gridCard.css';
import { usePokemons } from '../../hooks/usePokemons';
import { useContext, useEffect } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';
import { SearchBar } from '../SearchBar/SearchBar';

export const GridCards = () => {
   useEffect(() => {
      return () => {
         updateSearch('');
      };
   }, []);
   const { pokemonState, updateSearch } = useContext(PokemonContext);
   const { pokemons, search } = pokemonState;

   let filterSearchPokemons: Pokemon[] = pokemons.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
   );

   const pokeCards = pokemons.map((p) => {
      return (
         <Card
            key={p.id}
            id={p.id}
            type={p.type}
            picture={p.picture}
            name={p.name}
            weight={p.weight}
            height={p.height}
            url={p.url}
            ability={p.ability}
            capture_rate={p.capture_rate}
            description={p.description}
            generation={p.generation}
         />
      );
   });
   const pokeCardsSearch = filterSearchPokemons.map((p) => {
      return (
         <Card
            key={p.id}
            id={p.id}
            type={p.type}
            picture={p.picture}
            name={p.name}
            weight={p.weight}
            height={p.height}
            url={p.url}
            ability={p.ability}
            capture_rate={p.capture_rate}
            description={p.description}
            generation={p.generation}
         />
      );
   });

   return (
      <div className='grid_poke_cards'>
         <div className='grid_heading_filters'>
            <h1>ALL POKEMON</h1>
            <SearchBar />
            <div className='grid_filters'>
               <div className='poke_filter'>
                  <label htmlFor='color'>Filter by Color</label>
                  <select name='filter1' id='color'>
                     Filter by Color
                  </select>
               </div>
               <div className='poke_filter'>
                  <label htmlFor='type'>Filter by Type</label>
                  <select name='filter2' id='type'>
                     Filter by Type
                  </select>
               </div>
            </div>
         </div>
         <div className='poke_cards'>
            {search.length < 0 ? pokeCards : pokeCardsSearch}
         </div>
      </div>
   );
};
