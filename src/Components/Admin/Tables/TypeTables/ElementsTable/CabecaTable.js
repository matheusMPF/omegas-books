const CabecaTable = () => {

    const colum = [
        {name: "id"},
        {name: "Título"},
        {name: "Genêro"},
        {name: "Autor"},
        {name: "Preço"},
        {name:""},
        {name:""},
    ]

    return (
        <>
            <thead>
                <tr>
                    {colum.map(colum=>(
                        <th>{colum.name}</th>
                    ))}
                   
                </tr>
            </thead>
        </>
    )

}

export default CabecaTable;