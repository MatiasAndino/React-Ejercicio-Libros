import { useState } from 'react';
import { SelectedFilter } from './SelectedFilter';

import '../style.css';

export const ListaLibros = ({ libros, setLibros }) => {

    const [ selectedGenre, setSelectedGenre ] = useState('Todos');

    const filtro = selectedGenre !== 'Todos'
        ? libros.filter(({ genre }) => genre === selectedGenre)
        : libros;



    function handleClick( selectedISBN ) {
        setLibros( libros.map( libro => {
            if (selectedISBN === libro.ISBN) {
                libro.listaLectura = true;
            }
            return libro;
        }) );
    }

    return (
        <>
            <SelectedFilter setSelectedGenre={ setSelectedGenre } />

            <div className="col-8">
                <div className="row rows-cols-1 row-cols-md-4 g-4">
                    {
                        filtro.map(({ title, cover, ISBN, listaLectura }) => {
                            return (
                                <div key={ ISBN } className="col">
                                    <img 
                                        src={ cover } 
                                        alt={ title } 
                                        className={`img-thumbnail img-fluid ${listaLectura && 'bg-warning opacity-50'}`}
                                        onClick={() => handleClick( ISBN )}
                                    />   
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}