import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';
import { fetchDescription } from '../../utils/fetchAllPokemons';
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
}: Pokemon) => {
   return (
      <div className='pokecard'>
         <div className='poke_svg'>
            <img src={picture} alt={name} />
         </div>
         <div className='poke_info'>
            <div className='poke_main_info'>
               <p id='poke_name'>{name[0].toUpperCase() + name.slice(1)}</p>
               <p id='poke_id'>#{id}</p>
            </div>
            <p id='poke_type'>Type: {type[0].toUpperCase() + type.slice(1)}</p>
            <hr />
            <div className='poke_extra_info'>
               <p>Generation: {id > 151 ? '2' : '1'}</p>
               <p>Capture Rate: {capture_rate}</p>
               <Link to={`/pokemon/${id}`}>MAs..</Link>
            </div>
         </div>
      </div>
   );
};
