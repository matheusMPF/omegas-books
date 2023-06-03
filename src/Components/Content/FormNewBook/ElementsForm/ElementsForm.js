import React from "react";
import "./index.css"

const ElementsForm = (props) => {

    return (
        <>
            <input type={props.type} id={props.id} name={props.name} required placeholder={props.placeholder} />
        </>
    )

}

export default ElementsForm;