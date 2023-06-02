import "./index.css"


const LinesTable = (props) => {

    const button = [
        {class: "excluir", title: "Excluir", name: "X"},
        {class: "editar", title: "Editar", name: "✏️"},
        {class: "validar", title: "Validar", name: "✔"},
    ]

    return (
        <>
            <tbody>
                <tr>
                    <td className="dados">{props.dado1}</td>
                    <td className="dados">{props.dado2}</td>
                    <td className="dados">{props.dado3}</td>
                    <td className="dados">{props.dado4}</td>
                    <td className="dados">{props.dado5}</td>

                    {button.map(button => (
                    <td className="area-button" title={button.title}><button className={button.class} >{button.name}</button></td>
                    ))}

                </tr>
            </tbody>
        </>
    )

}

export default LinesTable;