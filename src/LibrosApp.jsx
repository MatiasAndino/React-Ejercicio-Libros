import { useState } from "react";
import { ListaLibros } from "./components/ListaLibros";
import { SelectedFilter } from "./components/SelectedFilter";

function LibrosApp() {
  
  const [ genero, setGenero ] = useState('Todos')
  
  return (
    <>
      <SelectedFilter setGenero={ setGenero } />
      <div className="container">
        <div className="row">
          
          <div className="col-8">
            <ListaLibros genero={ genero } />
          </div>

          <div className="col border border-primary rounded">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default LibrosApp
