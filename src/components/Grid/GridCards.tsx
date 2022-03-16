/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react';

import { PokemonContext } from '../../context/PokemonContext';
import { useForm } from '../../hooks/useForm';
import { Card } from '../Card/Card';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';
import { SearchBar } from '../SearchBar/SearchBar';
import { pokeColors, pokeTypes } from '../../utils/typeColor';
import './gridCard.css';

export const GridCards = () => {
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
   const { values: valueColor, handleInputChange: handleInputChangeColor } =
      useForm({
         filterColor: 'all',
      });
   const { filterType } = values;
   const { filterColor } = valueColor;

   let filterGenPokemons = useRef<Pokemon[]>(pokemons);

   useEffect(() => {
      if (filterType === 'all') {
         filterGenPokemons.current = pokemons;
      } else {
         console.log(filterType);
         filterGenPokemons.current = pokemons.filter(
            (p) => p.type.toLowerCase() === filterType,
         );
      }
      setCount(count + 1);
   }, [filterType, pokemons]);

   useEffect(() => {
      if (filterColor === 'all') {
         filterGenPokemons.current = pokemons;
      } else {
         console.log(filterColor);

         filterGenPokemons.current = pokemons.filter(
            (p) => p.color === filterColor,
         );
      }
      setCount(count + 1);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [filterColor, pokemons]);

   let filterSearchPokemons: Pokemon[] = filterGenPokemons.current.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
   );

   const pokeCards = filterGenPokemons.current.map((p) => {
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

   console.log(pokeCards);

   return (
      <div className='grid_poke_cards'>
         <div className='grid_heading_filters'>
            <h1>ALL POKEMON</h1>
            <SearchBar />
            <div className='grid_filters'>
               <div className='poke_filter'>
                  <label htmlFor='color'>Filter by Color</label>
                  <select
                     name='filterColor'
                     id='color'
                     onChange={handleInputChangeColor}
                     value={filterColor}
                  >
                     <option value='all' key={'all'}>
                        All
                     </option>
                     {pokeColors.map((t) => (
                        <option value={t.color} key={t.color}>
                           {t.name}
                        </option>
                     ))}
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
            {search.length < 0 ? pokeCards : pokeCardsSearch}
         </div>
      </div>
   );
};
