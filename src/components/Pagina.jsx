import { useState } from "react"
import { Libros } from "../helpers/Libros";
import { ListaLibros } from './ListaLibros'
import { ListaLectura } from './ListaLectura'



export const Pagina = () => {

    const [ libros, setLibros ] = useState(Libros);

    return (
        <>
            <div className="container">
                <div className="row">
          
                    <ListaLibros libros={ libros } setLibros={ setLibros } />

                    <ListaLectura libros={ libros } setLibros={ setLibros } />
                </div>
            </div>
        </>
    )
}
