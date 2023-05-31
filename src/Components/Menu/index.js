import {Link} from 'react-router-dom';
import './index.css';
import { Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <>

            <nav>

                <div className="logo">Ω Books</div>

                <ul className="menu-itens">
                    <li><Link to="/" className='li'>Home</Link></li>
                    <li><Link to="/autores" className='li'>Autores</Link></li>
                    <li><Link to="/colecoes" className='li'>Coleções</Link></li>
                    <li><Link to="/sobre" className='li'>sobre</Link></li>
                </ul>

            </nav>

            <Outlet />
        </>






    );
};

export default Menu;
