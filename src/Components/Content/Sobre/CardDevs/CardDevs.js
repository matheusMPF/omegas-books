import React from "react";
import "./CardDevs.css"
import Github from "../../../Imagens/github.png"
import LinkedIn from "../../../Imagens/linkedin.png"


const CardDevs = (props) => {

    const { src, alt } = props;

    return (
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

                <div>
                    <p className="descricao">{props.descricao}</p>

                    <div className="area-redes">
                        <div>

                            <a href={props.hrefGithub}>
                                <img src={Github} alt="Github" className="redes" />
                            </a>

                            <a href={props.hrefLinkedin}>
                                <img src={LinkedIn} alt="LinkedIn" className="redes" />
                            </a>

                        </div>
                    </div>
                </div>

            </li >
        </>
    )

}

export default CardDevs;