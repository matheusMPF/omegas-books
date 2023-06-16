import React from 'react';
import FormNewBook from "./FormNewBook/FormNewBook";
import "./FormNewBook/FormNewBook.css"


const TableBooks = () => {

    // Script

    const dados = ([]);


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
                        {dados.map((dado) => (
                            <tr key={dado.id}>
                                <td>{dado.id}</td>

                                <td>{dado.title}</td>

                                <td>{dado.genre}</td>

                                <td>{dado.author}</td>

                                <td>{dado.price}</td>

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