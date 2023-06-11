import React, { useState } from 'react';
import FormNewBook from "./FormNewBook/FormNewBook";
import "./FormNewBook/FormNewBook.css"


const TableBooks = () => {

    const [books, setBooks] = useState([
        { id: 1, title: 'Cinderela', genre: 'Infantil', author: ' Charles Perrault', price: 12.99 },
        { id: 2, title: 'O pequeno príncipe', genre: 'Infantil', author: 'Antoine de Saint-Exupéry', price: 14.99 },
        { id: 3, title: 'Chapeuzinho vermelho', genre: 'Infantil', author: 'Charles Perrault', price: 12.99 },
        { id: 4, title: 'A bela e a fera', genre: 'Infantil', author: 'Gabrielle-Suzanne de Villeneuve', price: 12.99 },
    ]);

    const [editedBook, setEditedBook] = useState(null);

    const handleDelete = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const handleEdit = (book) => {
        setEditedBook(book);
    };

    const handleSave = () => {
        setEditedBook(null);
    };

    const handleInputChange = (event, field) => {
        setEditedBook({ ...editedBook, [field]: event.target.value });
    };



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

                                <td>{editedBook && editedBook.id === book.id ? (
                                    <input
                                        type="text"
                                        value={editedBook.title}
                                        onChange={(event) => handleInputChange(event, 'title')}
                                    />
                                ) : (
                                    book.title
                                )}</td>

                                <td>{editedBook && editedBook.id === book.id ? (
                                    <input
                                        type="text"
                                        value={editedBook.genre}
                                        onChange={(event) => handleInputChange(event, 'genre')}
                                    />
                                ) : (
                                    book.genre
                                )}</td>

                                <td>{editedBook && editedBook.id === book.id ? (
                                    <input
                                        type="text"
                                        value={editedBook.author}
                                        onChange={(event) => handleInputChange(event, 'author')}
                                    />
                                ) : (
                                    book.author
                                )}</td>

                                <td>{editedBook && editedBook.id === book.id ? (
                                    <input
                                        type="text"
                                        value={editedBook.price}
                                        onChange={(event) => handleInputChange(event, 'price')}
                                    />
                                ) : (
                                    book.price
                                )}</td>

                                <td>
                                    {editedBook && editedBook.id === book.id ? (
                                        <button className='salvar' onClick={handleSave}>✔️</button>
                                    ) : (
                                    
                                            <button className='editar' onClick={() => handleEdit(book)}>✏️</button>
                                        
                                    )}
                                </td>

                                <td> <button className='excluir' onClick={() => handleDelete(book.id)}>X</button></td>




                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )

}

export default TableBooks;