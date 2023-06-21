
import Cinderela from "../../Imagens/cinderela.jpg";
import BelaFera from "../../Imagens/bela-fera.jpg";
import Chapeuzinho from "../../Imagens/chapeuzinho.jpg";
import PequenoPrincipe from "../../Imagens/pequeno-príncipe.jpg";
import CardBooks from "./CardBooks";
import Footer from "../../Footer/Footer";

const Home = () => {

    return (
        <div>
            <ul className="list-books">

                <CardBooks nameBook="Cinderela" src={Cinderela} alt="Cinderela" genero="Infantil" 
                price="R$ 19,99" pages= "Paginas: 10" author= "Autor: Grimm" editory="Editora: Disney"
                />

                <CardBooks nameBook="A bela e a fera" src={BelaFera} alt="A bela e a fera" genero="Infantil" 
                price="R$ 19,99" pages= "Paginas: 12" author= "Autor: Gabrielle Suzanne" editory="Editora: Disney" />

                <CardBooks nameBook="Chapeuzinho Vermelho" src={Chapeuzinho} alt="Chapeuzinho Vermelho" genero="Infantil" 
                price="9,99"  pages= "Paginas: 7" author= "Autor: Perralt" editory="Editora: Moinhos" />

                <CardBooks nameBook="O pequeno príncipe" src={PequenoPrincipe} alt="Chapeuzinho Vermelho" genero="Infantil" 
                price="25,99"  pages= "Paginas: 18" author= "Autor: Antoine de Saint-Exupéry" editory="Editora:  Grupo Companhia das Letras" />

            </ul>


            <Footer/>
        </div>
    );

}

export default Home;