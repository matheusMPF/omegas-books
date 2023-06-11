import React from "react";
import "./FormNewBook.css"

const FormNewBook = () => {

    return (
        

            <form> 

                <input type="number" id="id" name="id"
                    required placeholder="Id" 
                />

                <input type="text" id="title" name="title"
                    required placeholder="Título" />

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

                <input type="text" id="author" name="author"
                    required placeholder="Autor" />

                <input type="text" id="cost" name="cost"
                    required placeholder="Preço" />

                <button type="submit" className="buttonSubmit">+ Novo livro</button>


            </form>

    )

}

export default FormNewBook;