import "./index.css"
import {Link} from 'react-router-dom';

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
                    <th></th>
                    <th></th>
                    <th><Link to="/adminBooks/formbook"><button className="NewBook">+ Novo livro</button></Link></th>

                </tr>
            </thead>
        </>
    )

}

export default CabecalhoBooks;