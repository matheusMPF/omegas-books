import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {

    return (
        <footer>
            <div className="footer-content">

                <div className="content-left">
                    <p className="title-footer">Ômegas Books</p>
                    <p>Um projeto da faculdade com intuito de criar um
                        e-commerce de livros usando o framework React. 
                        somos um grupo de três estudantes de ADS (análise e desenvolvimento
                        de sistemas), Mais informações sobre a equipe por trás desse sistema em
                        <Link to="/sobre"> Sobre</Link>.
                    </p>
                </div>

                <div className="content-middle">
                    <p>Suporte:</p>
                    <p>E-mail: Omegasbookscontact@gmail.com</p>
                    <p>WhatsApp: (81) 9 8954-7312</p>
                </div>

                <div className="content-rigth">
                    <p>Não tem uma conta? Faça seu <Link to="/cadastro">Cadastro aqui</Link></p>
                    
                </div>

            </div>
        </footer>
    );

}

export default Footer;