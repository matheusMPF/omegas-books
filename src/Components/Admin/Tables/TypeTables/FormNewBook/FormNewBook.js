import React from "react";
import InputNewForm from "./ElementsForm/inputNewBook";
import "./FormNewBook.css"
import SelectNewBook from "./ElementsForm/SelectNewBook";

const FormNewBook = () => {

    return (
        <div className="container">
            <form>
                <div className="title">
                    <h3>Adicione um novo livro:</h3>
                </div>

                <InputNewForm type="Number" id="id" name="id" 
                placeholder="Informe o ID do livro" />

                <InputNewForm type="Text" id="NameBook" name="NameBook" 
                placeholder="Informe o nome do livro" />

                <SelectNewBook name="genero"/>

                <InputNewForm type="Text" id="Autor" name="autor" 
                placeholder="Informe o nome do autor" />

                <InputNewForm type="Number" id="valor" name="valor" 
                placeholder="Informe o valor do livro" />

                <button type="submit" className="buttonSubmit">Enviar</button>
            </form>
        </div>

    )

}

export default FormNewBook;