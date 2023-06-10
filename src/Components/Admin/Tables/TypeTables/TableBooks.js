import React from "react";
import CabecaTable from "./ElementsTable/CabecaTable";
import BodyTable from "./ElementsTable/BodyTable";
import FormNewBook from "./FormNewBook/FormNewBook";

const TableBooks = () => {

    return (
        <div className="container">

            <div className="container-form">
                <FormNewBook />
            </div>

            <div className="table-responsive">

                <table>
                    <CabecaTable />
                    <BodyTable />
                </table>

            </div>

        </div>
    )

}

export default TableBooks;