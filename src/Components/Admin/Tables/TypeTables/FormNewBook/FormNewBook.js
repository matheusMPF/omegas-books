import React from 'react';
import './FormNewBook.css';

const FormNewBook = () => {

  return (

    <div className='container-formNewBook'>

      <p className='pAddNewBook'>Adicione um livro ao banco de dados:</p>

      <form className='Form-new-book'>

        <input type="text" id="Title" name="title" required placeholder="Título"  />

        <input type="number" id="pages" name="pages" required placeholder="Páginas" />

        <input type="text" id="UrlImg" name="UrlImg" required placeholder="URL da imagem"/>

        <input type="number" id="Price" name="price" required placeholder="Preço" />

        <input type="text" id="Author" name="author" required placeholder="Autor"/>

        <input type="text" id="Editora" name="Editora" required placeholder="Editora" />

        <select id="Category" name="Category" required>
          <option className="infoCategory">Gênero</option>
          <option className="Category">Aventura</option>
          <option className="Category">Suspense</option>
          <option className="Category">Comédia</option>
          <option className="Category">Mistério</option>
          <option className="Category">Infantil</option>
          <option className="Category">Terror</option>
          <option className="Category">Poema</option>
          <option className="Category">Educativo</option>
          <option className="Category">Fábula</option>
          <option className="Category">Ficção</option>
        </select>

        <button type="submit" className="buttonSubmit">
          + Novo livro
        </button>
      </form>
    </div>
  );
};

export default FormNewBook;