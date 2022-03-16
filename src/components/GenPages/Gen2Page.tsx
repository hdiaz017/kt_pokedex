/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react';

import { PokemonContext } from '../../context/PokemonContext';
import { useForm } from '../../hooks/useForm';
import { Card } from '../Card/Card';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';
import { SearchBar } from '../SearchBar/SearchBar';
import { pokeColors, pokeTypes } from '../../utils/typeColor';
import '../Grid/gridCard.css';

export const Gen2Page = () => {
   // Clean search bar when changing tab
   useEffect(() => {
      return () => {
         updateSearch('');
      };
   }, []);

   // Get data from context
   const { pokemonState, updateSearch } = useContext(PokemonContext);
   const { pokemons, search } = pokemonState;
   const [count, setCount] = useState(1);
   // Setting custom hook form and values
   const { values, handleInputChange } = useForm({
      filterType: 'all',
   });
   // Setting custom hook form and values
   const { values: valueColor, handleInputChange: handleInputChangeColor } =
      useForm({
         filterColor: 'all',
      });
   // Destructure data from hook
   const { filterType } = values;
   const { filterColor } = valueColor;

   let filterGenPokemons = useRef<Pokemon[]>(
      pokemons.filter((p) => p.generation === 2),
   );
   // Filter pokemons by color
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
   // Filter pokemons by search
   useEffect(() => {
      if (filterColor === 'all') {
         filterGenPokemons.current = pokemons.filter((p) => p.generation === 2);
      } else {
         console.log(filterColor);

         filterGenPokemons.current = pokemons
            .filter((p) => p.generation === 2)
            .filter((p) => p.color === filterColor);
      }
      setCount(count + 1);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [filterColor, pokemons]);

   // Filter pokemons by search
   let filterSearchPokemons: Pokemon[] = filterGenPokemons.current.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
   );

   // Map pokemon cards by filters or search
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
            <h1>GENERATION 2</h1>
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
            {search.length < 0 ? pokeCardsGen : pokeCardsSearch}
         </div>
      </div>
   );
};
