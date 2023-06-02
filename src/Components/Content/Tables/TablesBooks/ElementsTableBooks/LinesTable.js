import "./index.css"

const LinesTable = (props) => {

    return (
        <>
            <tbody>
                <tr>
                    <td>{props.dado1}</td>
                    <td>{props.dado2}</td>
                    <td>{props.dado3}</td>
                    <td>{props.dado4}</td>
                    <td>{props.dado5}</td>
                </tr>
            </tbody>
        </>
    )

}

export default LinesTable;