import { useState } from "react";
import React from "react";

const SelectNewBook = (props) => {

    const [Valor, setValor] = useState("")

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <>
            <select id={props.name} name={props.name} onChange={handleChange}
                required  value={Valor}>

                <option className="infoGen">Informe o Gênero</option>
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

        </>
    )

}

export default SelectNewBook;