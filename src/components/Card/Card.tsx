import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faL, fas } from '@fortawesome/free-solid-svg-icons';

import './card.css';

library.add(faHeart, fas);

export const Card = ({
   picture,
   name,
   id,
   type,
   url,
   height,
   weight,
   capture_rate,
   description,
   generation,
}: Pokemon) => {
   let navigate = useNavigate();
   return (
      <div className='pokecard' onClick={() => navigate(`/pokemon/${id}`)}>
         <div className='poke_svg'>
            <img src={picture} alt={name} />
         </div>
         <div className='poke_info'>
            <div className='poke_main_info'>
               <p id='poke_name'>{name}</p>
               <p id='poke_id'>#{id}</p>
            </div>
            <div className='poke_main_info'>
               <p id='poke_type'>Type: {type}</p>
               <FontAwesomeIcon icon={faHeart} id='card_heart' />
            </div>

            <hr />
            <div className='poke_extra_info'>
               <p>Generation: {generation}</p>
               <div className='poke_more_info'>
                  <p>Capture Rate: {capture_rate}</p>
                  <FontAwesomeIcon icon='arrow-right' id='card_arrow' />
               </div>
            </div>
         </div>
      </div>
   );
};
