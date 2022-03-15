import React from 'react';

import './App.css';
import { PokemonContext } from './context/PokemonContext';

import { Navigation } from './router/Navigation';

function App() {
   return (
      <>
         <Navigation />
      </>
   );
}

export default App;
