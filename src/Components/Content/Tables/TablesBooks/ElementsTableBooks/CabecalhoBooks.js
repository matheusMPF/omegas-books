import "./index.css"

const CabecalhoBooks = (props) => {

    return (
        <>
            <thead>
                <tr>
                    <th>{props.colum1}</th>
                    <th>{props.colum2}</th>
                    <th>{props.colum3}</th>
                    <th>{props.colum4}</th>
                    <th>{props.colum5}</th>
                </tr>
            </thead>
        </>
    )

}

export default CabecalhoBooks;