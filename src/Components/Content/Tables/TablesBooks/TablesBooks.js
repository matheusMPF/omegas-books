import CabecalhoBooks from "./ElementsTableBooks/CabecalhoBooks";
import LinesTable from "./ElementsTableBooks/LinesTable";

const TableBooks = () => {

    return (
        <div className="table-container">

            <h2>Tabela de livros</h2>

            <div className="table-responsive">

                <table>
                    <CabecalhoBooks colum1="ID" colum2="Nome" colum3="Gênero" colum4="Autor(a)" colum5="Preço (R$)"  />
                    <LinesTable dado1="01" dado2="O pequeno príncipe" dado3="Infantil" dado4="indefined" dado5="25,00"  />
                    <LinesTable dado1="02" dado2="Chapeuzinho vermelho" dado3="Infantil" dado4="indefined" dado5="15,00"  />
                    <LinesTable dado1="03" dado2="Cinderela" dado3="Infantil" dado4="indefined" dado5="20,00"  />
                    <LinesTable dado1="04" dado2="A bela e a fera" dado3="Infantil" dado4="indefined" dado5="25,00"  />
                </table>

            </div>

        </div>
    )

}

export default TableBooks;