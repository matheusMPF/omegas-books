import FormNewBook from "./FormNewBook/FormNewBook";
import React from "react";

const TableBooks = () => {

    const livros = [
        {id: "01", title: "Cinderela", gender: "Infantil", 
        author: "Indefined", cost: "R$ 24,99" },

        {id: "02", title: "O pequeno príncipe", gender: "Infantil", 
        author: "Indefined", cost: "R$ 24,99" },
        
    ]

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
                            {livros.map((livro) => (
                                <tr key={livro.id}>
                                    <td>{livro.id}</td>
                                    <td>{livro.title}</td>
                                    <td>{livro.gender}</td>
                                    <td>{livro.author}</td>
                                    <td>{livro.cost}</td>
                                    <td className="excluir">X</td>
                                    <td className="editar">✏️</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

            </div>

        </div>
    )

}

export default TableBooks;