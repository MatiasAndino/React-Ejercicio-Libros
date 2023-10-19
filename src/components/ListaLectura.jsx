
export const ListaLectura = ({ libros, setLibros }) => {

    const filtro = libros.filter( libro => libro.listaLectura)

    function handleClick( selectedISBN ) {
        setLibros( libros.map( libro => {
            if (libro.ISBN === selectedISBN) {
                libro.listaLectura = false;
            }
            return libro;
        }));
    }


    return (

        <div className="col border border-primary rounded">
            <div className="row row-cols-md-2 g-4">
                {
                    filtro.map(({ title, cover, ISBN }) => {
                        return (
                            <div key={ ISBN } className="col mb-4">
                                <img src={ cover } alt={ title } className="img-thumbnail img-fluid"/>
                                <button className="btn btn-dark" onClick={ () => handleClick( ISBN ) }>❌</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}