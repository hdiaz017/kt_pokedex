import React from 'react';
import pokeball from '../../img/pokeball_line.png';
import './detailCard.css';

export const DetailCard = () => {
   return (
      <div className='poke_detail_page'>
         <h1>Wartortle #008</h1>
         <div id='poke_detail_type'>Water</div>
         <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg'
            alt=''
            id='detail_img'
         />
         <div className='poke_detail_cards'>
            <div className='pokedex_info'>
               <h1>Pokedex Information</h1>
               <div className='poke_gen_balls'>
                  <div className='poke_ball'>
                     <img src={pokeball} alt='' className='poke_ball_img1' />
                     <p>1 Gen</p>
                  </div>
                  <div className='poke_ball'>
                     <img src={pokeball} alt='' className='poke_ball_img2' />
                     <p>2 Gen</p>
                  </div>
               </div>
               <div>
                  <p id='description'>Description</p>
                  <p>
                     It is very timid. It will be afraid to move if it is alone.
                     But it will be active if it is in a group.
                  </p>
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
                     <p>1 Generation</p>
                     <p>1.0 m</p>
                     <p>22.5 kg</p>
                     <p>Torrent</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
