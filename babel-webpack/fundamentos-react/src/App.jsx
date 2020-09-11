import React from 'react';

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import Aleatorio from './components/Aleatorio'

import './styles/global.css';

function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <Primeiro />
      <ComParametro
        titulo="Situação do aluno"
        aluno="Mário César"
        nota={17.8}
      />
      <Aleatorio />
    </>
  );
}

export default App;