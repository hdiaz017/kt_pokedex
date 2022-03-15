import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import pokeball from '../../img/pokeball_line.png';
import './detailCard.css';

export const DetailCard = () => {
   const { pokemonState } = useContext(PokemonContext);
   const { pokemons } = pokemonState;
   const { id } = useParams();
   const [pokemon] = pokemons.filter((p) => p.id.toString() === id);
   const gen1Class = pokemon.generation === 1 ? 'poke_ball_img1' : 'poke_ball';
   const gen2Class = pokemon.generation === 2 ? 'poke_ball_img2' : 'poke_ball';

   return (
      <div className='poke_detail_page'>
         <h1>
            {pokemon.name} #{pokemon.id}
         </h1>
         <div id='poke_detail_type'>{pokemon.type}</div>
         <img src={pokemon.picture} alt={pokemon.name} id='detail_img' />
         <div className='poke_detail_cards'>
            <div className='pokedex_info'>
               <h1>Pokedex Information</h1>
               <div className='poke_gen_balls'>
                  <div className='poke_ball'>
                     <img src={pokeball} alt='gen1' className={gen1Class} />
                     <p>1 Gen</p>
                  </div>
                  <div className='poke_ball'>
                     <img src={pokeball} alt='gen2' className={gen2Class} />
                     <p>2 Gen</p>
                  </div>
               </div>
               <div>
                  <p id='description'>Description</p>
                  <p>{pokemon.description}</p>
               </div>
            </div>
            <div className='pokemon_info_card'>
               <h1>Pokemon Information</h1>
               <div className='pokemon_info'>
                  <div className='pokemon_info_left'>
                     <p>Generation</p>
                     <p>Height</p>
                     <p>Weight</p>
                     <p>Abilities</p>
                  </div>
                  <div className='pokemon_info_right'>
                     <p>{pokemon.generation} Generation</p>
                     <p>{pokemon.height.toFixed(1)} m</p>
                     <p>{pokemon.weight.toFixed(1)} kg</p>
                     <p>{pokemon.ability}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
