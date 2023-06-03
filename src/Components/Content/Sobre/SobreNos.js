import React from "react";
import CardDevs from "./CardDevs/CardDevs";
import PequenoPrincipe from "../../Imagens/pequeno-príncipe.jpg";

const SobreNos = () => {

    return (
        <>
            <ul className="list-devs">

               <CardDevs nameDev="Matheus" src={PequenoPrincipe} alt=""  
               classfuncao1="lider" classfuncao2="fullstack" 
               funcao1="Líder" funcao2="FullStack"
               descricao="Neste projeto para a faculdade tivemos a missão de desenvolver um ecommerce de livros
               utilizando as bibliotecas do React.js. Tive uma participação ativa tanto na fase da elaboração de como
               seria o sistema, quanto no desenvolvimento do front e back-end. A equipe foi composta por três integrantes
               que se dedicaram ao máximo para a realização deste projeto." />

            </ul>
        </>
    )

}

export default SobreNos;