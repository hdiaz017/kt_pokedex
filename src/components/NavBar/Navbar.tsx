import { NavLink } from 'react-router-dom';
import pokeball from '../../img/pokeball.svg';

import './navbar.css';

export const Navbar = () => {
   return (
      <nav>
         <div className='pokeball_navbar'>
            <NavLink to='/home'>
               <img src={pokeball} alt='pokeball' id='pokeball_link' />
            </NavLink>
         </div>
         <div className='routes_navbar'>
            <ul className='routes'>
               <li>
                  <NavLink
                     to='/home'
                     className={({ isActive }) =>
                        isActive ? 'nav_active' : ''
                     }
                  >
                     All Pokemon
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to='/gen1'
                     className={({ isActive }) =>
                        isActive ? 'nav_active' : ''
                     }
                  >
                     Generation 1
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to='/gen2'
                     className={({ isActive }) =>
                        isActive ? 'nav_active' : ''
                     }
                  >
                     Generation 2
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to='/favorites'
                     className={({ isActive }) =>
                        isActive ? 'nav_active' : ''
                     }
                  >
                     Favorites
                  </NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};
