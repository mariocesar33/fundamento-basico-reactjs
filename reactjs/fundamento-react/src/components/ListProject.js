import React, { useState} from 'react';

function ListProject({ titulo }) {
  // const projects = ["Front-End WEB", "Back-End API", "Mobile APP"];
  const [projects, setProjects] = useState(["Front-End WEB", "Back-End API", "Mobile APP"]);
  /**
   * useState retorna um Array com duas posições.
   * 
   * 1) retorna a variavel com seu valor inicial
   * 2) é uma função para atualizarmor esse valor
   */

  function addProject() {
    //projects.push(`Novo Projeto ${Date.now()}`);

    setProjects([...projects, `Novo Projeto ${Date.now()}`])
    // console.log(projects);
  }
  
  return(
    <>
      <h1>{titulo}</h1>

      <ul>
        { projects.map( project => <li key={project}>{ project }</li> ) }
      </ul>

      <button type="submit" onClick={addProject}>Add Project</button>
    </>
  );
}

export default ListProject;