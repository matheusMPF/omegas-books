import { Link, Outlet } from 'react-router-dom';
import './index.css';
import React from 'react';

const Menu = () => {

    return (
        <>

            <nav>

                <div ><Link to="/" className="Logo">Ω Books</Link></div>

                <ul className="menu-itens">
                    <li><Link to="/" className='li'>Home</Link></li>

                    <li><Link to="/autores" className='li'>Autores</Link></li>

                    <li>
                        <Link to="/colecoes" className='li'>Coleções</Link>
                    </li>

                    <li><Link to="/sobre" className='li'>sobre</Link></li>
                </ul>

            </nav>

            <Outlet />


        </>

    );
};

export default Menu;
