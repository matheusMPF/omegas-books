import React from "react";
import CardDevs from "./CardDevs/CardDevs";


const SobreNos = () => {

    return (
        <>
            <ul className="list-devs">

                <CardDevs nameDev="Matheus Magalhães" 
                    classfuncao1="lider" classfuncao2="frontend"
                    funcao1="Líder" funcao2="Frontend"
                    descricao="Neste projeto para a faculdade tivemos a missão de desenvolver um e-commerce de livros
               utilizando as bibliotecas do React.js. Tive uma participação ativa tanto na fase da elaboração de como
               seria o sistema, quanto no desenvolvimento do front-end. A equipe foi composta por três integrantes
               que se dedicaram ao máximo para a realização deste projeto."
                    hrefGithub="https://github.com/matheusMPF"
                    hrefLinkedin="https://www.linkedin.com/in/matheus-magalh%C3%A3es-311560277/" />

                <CardDevs nameDev="Marcos Antônio"
                    classfuncao1="frontend"
                    funcao1="Frontend"
                    descricao="..."
                    hrefGithub=""
                    hrefLinkedin="" />

                <CardDevs nameDev="Sanderlan Jales" 
                    classfuncao1="backend"
                    classfuncao2="api"
                    funcao1="Backend"
                    funcao2="API"
                    descricao="..."
                    hrefGithub=""
                    hrefLinkedin="" />

            </ul>
        </>
    )

}

export default SobreNos;