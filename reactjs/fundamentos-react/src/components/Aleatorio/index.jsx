import React, { } from 'react';

function Aleatorio(props) {
 
  const aleatoria = parseInt(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div>
      <h2>Valor aleatório</h2>
      <p><stronp>Valor Mínimo:</stronp> {props.min}</p>
      <p><stronp>Valor Máximo:</stronp> {props.max}</p>
    </div>
  );
}

export default Aleatorio;