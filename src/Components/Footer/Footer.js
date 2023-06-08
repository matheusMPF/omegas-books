import "./Footer.css"

const Footer = () => {

    return (
        <footer>
            <div class="footer-content">

                <div className="content-left">
                    <p className="title-footer">Ômegas Books</p>
                    <p>Um projeto da faculdade com intuito de criar um
                        e-commerce de livros usando o framework React. 
                        somos um grupo de três estudantes de ADS (análise e desenvolvimento
                        de sistemas), Mais informações sobre a eqipe por trás desse sistema em
                        "Sobre".
                    </p>
                </div>

                <div className="content-middle">
                    <p>Contato/Suporte:</p>
                    <p>E-mail: Omegasbookscontact@gmail.com</p>
                    <p>WhatsApp: (81) 9 8954-7312</p>
                </div>

                <div className="content-rigth">
                    <p>Não tem uma conta? Faça seu <a href="cadastro.html">Cadastro aqui</a></p>
                    
                </div>

            </div>
        </footer>
    );

}

export default Footer;