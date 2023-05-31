import React from 'react';
import './index.css';
import { Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <>

            <nav>

                <div className="logo">Ω Books</div>

                <ul className="menu-itens">
                    <li>Home</li>
                    <li>Autores</li>
                    <li>Coleções</li>
                    <li>Sobre</li>
                </ul>

            </nav>

            <Outlet />
        </>






    );
};

export default Menu;
