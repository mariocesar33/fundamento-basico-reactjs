import React from 'react';

import Header from './components/Header';
import ListProject from './components/ListProject';

/** Três conseitos mais importante de React:
 * Componente
 * Propriedade
 * Estado & imotabilidade
 * 
 * Se dominares esses três conseitos você 
 * consegue criar qualquer aplicação em React 
 */

function App() {
  return (
    <>
      <Header titulo="Primeiro Título" subtitulo="Instação de softwares">
        <ul>
          <li>Node</li>
          <li>vscode</li>
          <li>Yarn</li>
        </ul>
      </Header>
      <Header titulo="Segundo Título" subtitulo="Inicio ao reactjs">
        <ul>
          <li>Componente</li>
          <li>Propriedade (props, children)</li>
          <li>Estado e imutabilidade</li>
        </ul>
      </Header >

      <ListProject titulo="Meus Projetos" />

      <h2>vamos descobrir uma nova forma de programar!</h2>
    </>
  ); 
}

export default App;
