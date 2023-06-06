import { Link } from "react-router-dom";

const HeaderTh = (props) => {

    return (
        <>
        
            <th>{props.colum1}</th>
            <th>{props.colum2}</th>
            <th>{props.colum3}</th>
            <th>{props.colum4}</th>
            <th>{props.colum5}</th>
            <th></th>
            <th></th>
            <th><Link to="/adimin/formnewbook"><button className="NewBook">+ Novo livro</button></Link></th>
        </>
    )

}

export default HeaderTh;