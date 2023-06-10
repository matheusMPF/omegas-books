import React from "react";
import "./FormNewBook.css"
import { useState } from "react";
import axios from "axios";


const FormNewBook = () => {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [gender, setGender] = useState("");
    const [author, setAuthor] = useState("");
    const [cost, setCost] = useState("");

    const addBook = async (event) => {
        event.preventDefault();

        const book = {id, title, gender, author, cost};

        try {
            await axios.post('http://localhost:3000/admin', book);
            alert('Livro adicionado com sucesso!');
            setId('');
            setTitle('');
            setGender('');
            setAuthor('');
            setCost('');

          } catch (error) {
            console.error(error);
            alert('Erro ao adicionar o livro.');
          }
    };

    return (
        

            <form onSubmit={addBook}> 

                <input type="number" id="id" name="id"
                    required placeholder="Id" value={id} 
                    onChange={(event) => setId(event.target.value)} />

                <input type="text" id="title" name="title"
                    required placeholder="Título"  value={title} 
                    onChange={(event) => setTitle(event.target.value)} />

                <select id="gender" name="gender" required
                     value={gender} onChange={(event) => setGender(event.target.value)}>

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

                <input type="text" id="author" name="author"
                    required placeholder="Autor"  value={author} 
                    onChange={(event) => setAuthor(event.target.value)} />

                <input type="text" id="cost" name="cost"
                    required placeholder="Preço"  value={cost} 
                    onChange={(event) => setCost(event.target.value)} />

                <button type="submit" className="buttonSubmit">+ Novo livro</button>


            </form>

    )

}

export default FormNewBook;