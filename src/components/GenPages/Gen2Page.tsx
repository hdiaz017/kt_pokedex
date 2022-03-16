/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from '../Card/Card';

import { useContext, useEffect, useRef, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';
import '../Grid/gridCard.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { useForm } from '../../hooks/useForm';
import { pokeTypes } from '../../utils/typeColor';

export const Gen2Page = () => {
   useEffect(() => {
      return () => {
         updateSearch('');
      };
   }, []);

   const { pokemonState, updateSearch } = useContext(PokemonContext);
   const { pokemons, search } = pokemonState;
   const [count, setCount] = useState(1);
   const { values, handleInputChange } = useForm({
      filterType: 'all',
   });
   const { filterType } = values;

   let filterGenPokemons = useRef<Pokemon[]>(
      pokemons.filter((p) => p.generation === 2),
   );
   useEffect(() => {
      if (filterType === 'all') {
         filterGenPokemons.current = pokemons.filter((p) => p.generation === 2);
      } else {
         console.log(filterType);
         filterGenPokemons.current = pokemons
            .filter((p) => p.generation === 2)
            .filter((p) => p.type.toLowerCase() === filterType);
      }
      setCount(count + 1);
   }, [filterType, pokemons]);
   console.log(filterGenPokemons);

   let filterSearchPokemons: Pokemon[] = filterGenPokemons.current.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
   );

   const pokeCardsGen = filterGenPokemons.current.map((p) => {
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
            color={p.color}
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
            color={p.color}
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
                  <select
                     name='filterType'
                     id='type'
                     onChange={handleInputChange}
                     value={filterType}
                  >
                     <option value='all' key={'all'}>
                        All
                     </option>
                     {pokeTypes.map((t) => (
                        <option value={t} key={t}>
                           {t[0].toUpperCase() + t.slice(1)}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
         </div>
         <div className='poke_cards'>
            {search.length < 0 ? pokeCardsGen : pokeCardsSearch}
         </div>
      </div>
   );
};
