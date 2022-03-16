import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../../interfaces/FetchPokemonInterfaces';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, fas } from '@fortawesome/free-solid-svg-icons';

import './card.css';
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

library.add(faHeart, fas);

export const Card = (pokemon: Pokemon) => {
   const { picture, name, id, type, capture_rate, generation } = pokemon;
   let navigate = useNavigate();
   const { addFavorite, pokemonState, removeFavorite } =
      useContext(PokemonContext);
   const { favorites } = pokemonState;
   // useEffect(() => {

   // }, [favorites])
   const isFavorite = favorites.filter((f) => f.id === id);
   const addFav = () => {
      addFavorite(pokemon);
   };
   const removeFav = () => {
      removeFavorite(pokemon);
   };

   return (
      <div className='pokecard'>
         <div className='poke_svg'>
            <img
               src={picture}
               alt={name}
               onClick={() => navigate(`/pokemon/${id}`)}
               id='poke_card_img'
            />
         </div>
         <div className='poke_info'>
            <div className='poke_main_info'>
               <p id='poke_name'>{name}</p>
               <p id='poke_id'>#{id}</p>
            </div>
            <div className='poke_main_info'>
               <p id='poke_type'>Type: {type}</p>
               {isFavorite.length > 0 ? (
                  <FontAwesomeIcon
                     icon={faHeart}
                     id='card_heart_fav'
                     onClick={removeFav}
                  />
               ) : (
                  <FontAwesomeIcon
                     icon={faHeart}
                     id='card_heart'
                     onClick={addFav}
                  />
               )}
            </div>

            <hr />
            <div className='poke_extra_info'>
               <p>Generation: {generation}</p>
               <div className='poke_more_info'>
                  <p>Capture Rate: {capture_rate}</p>
                  <FontAwesomeIcon
                     icon='arrow-right'
                     id='card_arrow'
                     onClick={() => navigate(`/pokemon/${id}`)}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
