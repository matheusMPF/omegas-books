import HeaderTh from "./Elements/HeaderTh";

const CabecaTable = () => {

    return (
        <>
            <thead>
                <tr>
                    <HeaderTh colum1="id" colum2="Nome" colum3="Gênero" colum4="Autor" colum5="Valor"/>
                </tr>
            </thead>
        </>
    )

}

export default CabecaTable;