import React from "react";
import "./CardDevs.css"

const CardDevs = (props) => {

    const {src, alt} = props;

    return(
        <>
            <li className="card-dev">
                <div class="name-dev">
                    <span>{props.nameDev}</span>
                </div>
                <img src={src} alt={alt} className="imagem-dev" />

                <ul className="funcao">
                    <li className={props.classfuncao1}>{props.funcao1}</li>
                    <li className={props.classfuncao2}>{props.funcao2}</li>
                </ul>

                <p className="resumo">{props.descricao}

                </p>
            </li>
        </>
    )

}

export default CardDevs;