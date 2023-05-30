import React from 'react';
import './index.css'

const Menu = () => {
    return (

        <nav>

            <div className="logo">Ω Books</div>

            <ul className="menu-itens">
                <li><a>Livros</a></li>
                <li><a>Autores</a></li>
                <li><a>Coleções</a></li>
                <li><a>Sobre</a></li>
            </ul>
        </nav>
    );
};

export default Menu;
