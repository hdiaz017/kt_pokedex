import './card.css';

export const Card = () => {
   return (
      <div className='pokecard'>
         <div className='poke_svg'>
            <img
               src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg'
               alt='poke'
            />
         </div>
         <div className='poke_info'>
            <div className='poke_main_info'>
               <p id='poke_name'>Wartortle</p>
               <p id='poke_id'>#8</p>
            </div>
            <p id='poke_type'>Type: Water</p>
            <hr />
            <div className='poke_extra_info'>
               <p>Generation: 1</p>
               <p>Capture Rate: 5</p>
            </div>
         </div>
      </div>
   );
};
