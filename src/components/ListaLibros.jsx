import { library } from '../data/books.json' /*assert {type: 'json'}*/;

import '../style.css';


export const ListaLibros = ({ genero = 'Todos' }) => {


    const filtro = genero !== 'Todos'
        ? library.filter(({ book:{ genre } }) => genre === genero)
        : library;

    return (
        <div className="row rows-cols-1 row-cols-md-4 g-4">
            {
                filtro.map(({book:{ title, cover, ISBN }}) => {
                    return (
                    <div key={ ISBN } className="col">
                        <img src={ cover } alt={ title } className="img-thumbnail img-fluid"/>
                    </div>
                    )
                })
            }
        </div>
    )
}