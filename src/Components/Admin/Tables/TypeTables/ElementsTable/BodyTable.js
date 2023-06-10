const BodyTable = () => {

    const td = [
        { id: "idBook", title: "01" },
        { id: "titleBook", title: "O pequeno principe e a rosa" },
        { id: "generoBook", title: "Infantil" },
        { id: "athotBook", title: "Indefined" },
        { id: "costBook", title: "R$ 24,99" },

    ]

    const button = [
        { class: "excluir", title: "Excluir", name: "X" },
        { class: "editar", title: "Editar", name: "✏️" },
    ]

    return (

        <tbody>
            <tr>

                {td.map(td => (
                    <td id={td.id}>{td.title}</td>
                ))}


                {button.map(button => (
                    <td title={button.title}><button className={button.class}>{button.name}</button></td>
                ))}

            </tr>
        </tbody>
    )

}

export default BodyTable;