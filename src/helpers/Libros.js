import { library } from '../data/books.json';

export const Libros = library.map(({ book }) => {
    // console.log(book)
    book.listaLectura = false;

    return book;
});