import { useState } from "react";
// import { ListaLibros } from "./components/ListaLibros";
// import { ListaLectura } from "./components/ListaLectura";
import { SelectedFilter } from "./components/SelectedFilter";
import { Pagina } from "./components/Pagina";


function LibrosApp() {
  
  // const [ genero, setGenero ] = useState('Todos')
  
  return (
    <>
      {/* <SelectedFilter setGenero={ setGenero } />
      <div className="container">
        <div className="row"> */}
          
          <Pagina />
          {/* <ListaLibros genero={ genero } />

          <ListaLectura /> */}
        {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default LibrosApp