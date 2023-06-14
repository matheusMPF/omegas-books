import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FormNewBook.css';

const FormNewBook = () => {
  const navigate = useNavigate();
  const [nomeTitle, setNomeTitle] = useState('');
  const [idTitle, setIdTitle] = useState('');

  const atualizarBook = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/api/bookstore/admin`, {
        nome: nomeTitle,
      })
      .then(function (response) {
        console.log(response);
        navigate('/Admin');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    pegaParametrosUrl();
  }, []);

  const pegaParametrosUrl = () => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);

    const title = searchParams.get('title');
    const id = searchParams.get('id');

    setNomeTitle(title);
    setIdTitle(id);
  };

  return (
    <form onSubmit={atualizarBook}>
      <input type="number" id="id" name="id" required placeholder="Id" value={idTitle} onChange={(event) => setIdTitle(event.target.value)} />

      <input type="text" id="title" name="title" required placeholder="Título" value={nomeTitle} onChange={(event) => setNomeTitle(event.target.value)} />

      <select id="gender" name="gender" required>
        <option className="infoGen">Gênero</option>
        <option className="genero">Aventura</option>
        <option className="genero">Suspense</option>
        <option className="genero">Comédia</option>
        <option className="genero">Mistério</option>
        <option className="genero">Infantil</option>
        <option className="genero">Terror</option>
        <option className="genero">Poema</option>
        <option className="genero">Educativo</option>
        <option className="genero">Fábula</option>
        <option className="genero">Ficção</option>
      </select>

      <input type="text" id="author" name="author" required placeholder="Autor" />

      <input type="text" id="cost" name="cost" required placeholder="Preço" />

      <button type="submit" className="buttonSubmit">
        + Novo livro
      </button>
    </form>
  );
};

export default FormNewBook;