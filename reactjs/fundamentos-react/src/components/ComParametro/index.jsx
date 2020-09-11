import React from 'react';

function Comparametro(props) {
  const status = props.nota >= 9.5 ? 'aprovado' : 'rerovado';
  const notaInt = Math.ceil(props.nota);

  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3> <strong>{props.aluno}</strong> tem a nota de: {notaInt} está <span>{status}</span>.
      </h3>
    </div>
  );
}

export default Comparametro;