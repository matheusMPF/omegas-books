
import Grimm from "../../Imagens/irmaos_grimm.jpeg"
import Gabrielle from "../../Imagens/gabrielle.jpeg"
import Perralt from "../../Imagens/perralt.jpeg"
import Antoine from "../../Imagens/antonie.jpeg"
import CardAutor from "./CardAutores/CardAutor"
import Footer from "../../Footer/Footer"

const Autores = () => {
    return (
        <div>
            <ul className="list-author">

                <CardAutor nameAuthor="Irmãos Grimm" src={Grimm} alt="Cinderela"
                    obra="Cinderela" resumo="Os irmãos chamados Jacob e Wilhelm Grimm! Duzentos anos atrás,
                 eles lançaram um livro entitulado Histórias das Crianças e do Lar ou Contos da Criança e do Lar 
                 que trazia 51 contos infantis. Essa obra se espalhou pelo mundo, ganhou outras versões e chegaram a 
                 crianças de diferentes línguas e culturas." />

                <CardAutor nameAuthor="Gabrielle-Suzanne" src={Gabrielle} alt="A bela e a fera"
                    obra="A bela e a fera" resumo="A primeira versão da fábula, ao que se sabe, 
                foi escrita pela francesa Gabrielle-Suzanne Barbot de Villeneuve, conhecida como Madame de Villeneuve, 
                e lançada como um romance para adultos, em 1740. Com cerca de duzentas páginas, traz mais tramas – e 
                milongas – que a história hoje difundida." />

                <CardAutor nameAuthor="Charles Perrault" src={Perralt} alt="Chapeuzinho Vermelho"
                    obra="Chapeuzinho vermelho" resumo="Publicada pela primeira vez pelo francês Charles Perrault, e 
                depois pelos Irmãos Grimm (da versão mais conhecida), o conto sofreu inúmeras adaptações, mudanças e 
                releituras da cultura popular mundial, é uma das fábulas mais conhecidas de todos os tempos em todo o 
                mundo."/>

                <CardAutor nameAuthor="Antoine de Saint-Exupéry" src={Antoine} alt="Chapeuzinho Vermelho"
                    obra="Pequeno principe" resumo="Antoine de Saint-Exupéry nasceu em 29 de junho 
                de 1900, em Lyon, na França. Era filho do conde Jean-Marc de Saint-Exupéry (1863-1904), e ficou órfão 
                de pai quando tinha aproximadamente quatro anos de idade. Assim, sua mãe — Marie de Saint-Exupéry 
                (1875-1972) — precisou educar sozinha seus cinco filhos."/>

            </ul>

            <Footer />

        </div>
    )
}

export default Autores