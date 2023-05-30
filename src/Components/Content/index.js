import CardBooks from "./CardBooks";
import Cinderela from "../Imagens/cinderela.jpg";
import BelaFera from "../Imagens/bela-fera.jpg";
import Chapeuzinho from "../Imagens/chapeuzinho.jpg";
import PequenoPrincipe from "../Imagens/pequeno-príncipe.jpg";
import CardAddBooks from "./CardAddBook";
import LogoMais from "../Imagens/logoMais.png";
import "./index.css"

const Content = () => {

    return(
        <div>
            <ul className="list-books">

                <CardBooks nameBook="Cinderela" src={Cinderela} alt="Cinderela" classGenero="Infantil" genero="Infantil" resumo="'Cinderela' é a história de uma jovem que vive uma vida difícil com sua madrasta e irmãs más. Com a ajuda de sua fada madrinha, ela tem a oportunidade de comparecer a um baile real, onde encanta a todos. No entanto, há uma condição para sua presença no baile. A história segue as aventuras e desafios que Cinderela enfrenta enquanto busca realizar seu sonho."/>
                <CardBooks nameBook="A bela e a fera" src={BelaFera} alt="A bela e a fera" classGenero="Infantil" genero="Infantil" resumo="'Bela e a Fera' é a história de uma jovem chamada Bela que se sacrifica para salvar seu pai e acaba se tornando prisioneira de uma Fera em um castelo encantado. A história aborda a relação complexa entre Bela e a Fera, explorando temas como aparência versus essência e o poder do amor verdadeiro."/>
                <CardBooks nameBook="Chapeuzinho Vermelho" src={Chapeuzinho} alt="Chapeuzinho Vermelho" classGenero="Infantil" genero="Infantil" resumo="'Chapeuzinho Vermelho' é a história de uma garotinha que é enviada pela sua mãe para levar uma cesta de comida para a avó doente. No caminho, ela encontra um lobo mau que tenta enganá-la e chegar primeiro à casa da avó. A história destaca os perigos de confiar em estranhos e a importância de seguir as instruções dos pais."/>
                <CardBooks nameBook="O pequeno príncipe" src={PequenoPrincipe} alt="Chapeuzinho Vermelho" classGenero="Infantil" genero="Infantil" resumo="'O Pequeno Príncipe' é uma história encantadora sobre um pequeno príncipe que cultiva uma rosa especial em seu planeta. A relação entre o pequeno príncipe e sua rosa é cheia de amor, cuidado e descobertas sobre o valor da amizade e da conexão emocional."/>
                <CardAddBooks src={LogoMais} alt="Logo +" newBook="Adicionar novo livro" />
            </ul>
        </div>
    );

}

export default Content;