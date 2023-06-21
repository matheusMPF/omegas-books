import React, { useState, useEffect } from 'react';
import FormNewBook from "./FormNewBook/FormNewBook";
import "./FormNewBook/FormNewBook.css"
import http from '../../../../configAxios';


const TableBooks = () => {

    const [dados, setDados] = useState([])

    async function buscarDados() {
        return http.get("/api/bookstore/admin/livro/list")

            .then(resp => {
                return resp.data;
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    async function atualizarBooks() {
        const listBooks = await buscarDados().then();
        console.log(listBooks)
        setDados(listBooks)
    }

    useEffect(() => {
        atualizarBooks();
    }, []);

    return (
        <div className="container">

            <div className="container-form">
                <FormNewBook />
            </div>

            <div className="table-responsive">

                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Páginas</th>
                            <th>Preço</th>
                            <th>Ativo</th>
                            <th>Autor</th>
                            <th>Editora</th>
                            <th>Categotia</th>
                            <th className='area-btn'></th>
                            <th className='area-btn'>
                                <button className='btn-atualizar'
                                    onClick={() => atualizarBooks()}>Atualizar
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {dados ?

                            (dados.map((dado) => (
                                <tr key={dado.id}>
                                    <td>{dado.titulo}</td>
                                    <td>{dado.paginas}</td>
                                    <td>{dado.preco}</td>
                                    <td>{dado.ativo}</td>
                                    <td>{dado.autor}</td>
                                    <td>{dado.editora}</td>
                                    <td>{dado.categoria}</td>

                                    <td>
                                        <button className='editar'>✏️</button>
                                    </td>
                                    <td>
                                        <button className='excluir'>X</button>
                                    </td>

                                </tr>
                            )))
                            :

                            (<td><p>Não existem dados</p></td>)
                        }
                    </tbody>
                </table>

            </div>

        </div>
    )

}

export default TableBooks;