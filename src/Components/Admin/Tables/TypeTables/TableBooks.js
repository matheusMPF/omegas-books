import React from "react";
import CabecaTable from "./ElementsTable/CabecaTable";
import BodyTable from "./ElementsTable/BodyTable";



const TableBooks = () => {

    return(
        <div className="table-container">

            <h2 className="TitleTable">Tabela de livros</h2>

            <div className="table-responsive">

                <table>
                  <CabecaTable/>
                  <BodyTable/>
                </table>

            </div>

        </div>
    )

}

export default TableBooks;