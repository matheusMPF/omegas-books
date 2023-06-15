import React from 'react';
import FormNewBook from "./FormNewBook/FormNewBook";
import "./FormNewBook/FormNewBook.css"


const TableBooks = () => {

    const books = ([
        { id: 1, title: 'Cinderela', genre: 'Infantil', author: ' Charles Perrault', price: 12.99 },
        { id: 2, title: 'O pequeno príncipe', genre: 'Infantil', author: 'Antoine de Saint-Exupéry', price: 14.99 },
        { id: 3, title: 'Chapeuzinho vermelho', genre: 'Infantil', author: 'Charles Perrault', price: 12.99 },
        { id: 4, title: 'A bela e a fera', genre: 'Infantil', author: 'Gabrielle-Suzanne de Villeneuve', price: 12.99 },
    ]);


    return (
        <div className="container">

            <div className="container-form">
                <FormNewBook />
            </div>

            <div className="table-responsive">

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Genêro</th>
                            <th>Autor</th>
                            <th>Preço</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>

                                <td>{book.title}</td>

                                <td>{book.genre}</td>

                                <td>{book.author}</td>

                                <td>{book.price}</td>

                                <td>

                                    <button className='editar'>✏️</button>

                                </td>

                                <td>
                                    <button className='excluir'>X</button>
                                </td>




                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )

}

export default TableBooks;