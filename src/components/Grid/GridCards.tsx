import React from 'react';

import { Card } from '../Card/Card';
import './gridCard.css';
import { usePokemons } from '../../hooks/usePokemons';
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

interface Gen {
   gen: string;
}

export const GridCards = ({ gen }: Gen) => {
   const { isLoading } = usePokemons();
   const { pokemonState } = useContext(PokemonContext);
   const { pokemons } = pokemonState;

   let pokeCards;

   if (gen === '1') {
      pokeCards = pokemons.slice(0, 151).map((p) => {
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
   } else if (gen === '2') {
      pokeCards = pokemons.slice(151, 251).map((p) => {
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
   } else {
      pokeCards = pokemons.map((p) => {
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
   }

   // console.log('pokemons', pokemons);

   return (
      <div className='grid_poke_cards'>
         <div className='grid_heading_filters'>
            <h1>ALL POKEMON</h1>
            <input type='text' placeholder='Search Pokemon...' />
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
         <div className='poke_cards'>{pokeCards}</div>
      </div>
   );
};
