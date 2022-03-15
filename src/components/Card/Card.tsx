import { Link } from 'react-router-dom';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';

import './card.css';

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
   return (
      <div className='pokecard'>
         <div className='poke_svg'>
            <img src={picture} alt={name} />
         </div>
         <div className='poke_info'>
            <div className='poke_main_info'>
               <p id='poke_name'>{name}</p>
               <p id='poke_id'>#{id}</p>
            </div>
            <p id='poke_type'>Type: {type}</p>
            <hr />
            <div className='poke_extra_info'>
               <p>Generation: {generation}</p>
               <div className='poke_more_info'>
                  <p>Capture Rate: {capture_rate}</p>
                  <Link to={`/pokemon/${id}`}>MAs..</Link>
               </div>
            </div>
         </div>
      </div>
   );
};
