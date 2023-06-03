import React from "react";
import ElementsForm from "./ElementsForm/ElementsForm";

const FormNewBook = () => {

    return (
        <div className="container">
            <form>
                <div className="title">
                    <h3>Adicione um novo livro:</h3>
                </div>

                <ElementsForm type="Number" id="id" name="id" placeholder="Informe o ID do livro" />
                <ElementsForm type="Text" id="NameBook" name="NameBook" placeholder="Informe o nome do livro" />
                <ElementsForm type="Text" id="Genero" name="genero" placeholder="Informe o gênero do livro" />
                <ElementsForm type="Text" id="Autor" name="autor" placeholder="Informe o nome do autor" />
                <ElementsForm type="Number" id="valor" name="valor" placeholder="Informe o valor do livro" />

                <button type="submit" className="buttonSubmit">Enviar</button>
            </form>
        </div>

    )

}

export default FormNewBook;