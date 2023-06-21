import React, { useState } from 'react';
import './FormNewBook.css';
import http from '../../../../../configAxios';

const FormNewBook = () => {

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');
  const [editory, setEditory] = useState('');
  const [category, setCategory] = useState('');

  async function cadastrarNewBook (event){
    event.preventDefault();

    if(await cadastrarBookService(id, title, pages, price, author, editory, category)){
      alert('Livro cadastrado com sucesso')
      setId('')
      setTitle('')
      setPages('')
      setPrice('')
      setAuthor('')
      setEditory('')
      setCategory('')
    }else{
      alert('Erro ao cadastrar livro')
    }
  }

  async function cadastrarBookService(id, title, pages, price, author, editory, category){
    return http.post('/api/bookstore/admin/livro/create', 
    {nome: id, title, pages, price, author, editory, category})

    .then(resp => {
      return true;
  })
  .catch(erro => {
      console.log(erro)
      return false;
  })
  }

  return (

    <div className='container-formNewBook'>

      <p className='pAddNewBook'>Adicione um livro ao banco de dados:</p>

      <form className='Form-new-book' onSubmit={(event) => cadastrarNewBook(event)}>

        <input type="number" estado required placeholder="Id" value={id} setValue={setId} />

        <input type="text" required placeholder="Título" value={title} setValue={setTitle} />

        <input type="number" required placeholder="Páginas" value={pages} setValue={setPages} />

        <input type="text" required placeholder="Preço" value={price} setValue={setPrice} />

        <input type="text" required placeholder="Autor" value={author} setValue={setAuthor} />

        <input type="text" required placeholder="Editora" value={editory} setValue={setEditory} />

        <select required value={category} setValue={setCategory} >
          <option className="infoCategory">Categotia</option>
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

        <button className="buttonSubmit" valor="addBook" 
        onClick={() => {console.log('Livro cadastrado com sucesso')}}>
          + Novo livro
        </button>
      </form>
    </div>
  );
};

export default FormNewBook;