import { useState } from "react";
import React from "react";

const ElementsForm = (props) => {

    const [Valor, setValor] = useState("")

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <>
            <input type={props.type} id={props.id} name={props.name} 
            required placeholder={props.placeholder} onChange={handleChange} value={Valor} />
            <p>{Valor}</p>
        </>
    )

}

export default ElementsForm;