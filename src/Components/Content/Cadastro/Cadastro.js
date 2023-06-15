import "./Cadastro.css"

const Cadastro = () => {

    return(
        <div className="Container-form">

            <form className="Form-Cadastro">

                <h2>Ω Books</h2>

                <p className="pCadastre-se">Faça o seu cadastro:</p>

                <label>Nome completo</label>
                <input className="Input-form-cadastro" type="text" required placeholder="Informe seu nome"></input>

                <label>Data de nascimento</label>
                <input className="Input-form-cadastro" type="date" required placeholder="Informe a data de nascimento"></input>

                <label>E-mail</label>
                <input className="Input-form-cadastro" type="email" required placeholder="Informe seu email"></input>

                <label>Senha</label>
                <input className="Input-form-cadastro" type="password" required placeholder="Informe sua senha"></input>

                <button className="btn-cadastrar">Cadastre-se</button>

            </form>

        </div>
    )

}

export default Cadastro;