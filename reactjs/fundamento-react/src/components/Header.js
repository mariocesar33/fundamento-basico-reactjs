import React, { Children } from 'react';

function Header({titulo, subtitulo, children}) {
  return(
    <header >
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>

      {children}
    </header>
  );
}

export default Header;