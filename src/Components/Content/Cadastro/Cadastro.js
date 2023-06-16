import "./Cadastro.css"

const Cadastro = () => {



    function cadastrar() {
        var valorInputName = document.getElementById('nome')
        var nome = valorInputName.value

        alert(nome + " Seu cadastro foi realizado com sucesso")
    }

    return (
        <div className="Container-form">

            <form className="Form-Cadastro">

                <p className="pCadastre-se">Faça seu cadastro:</p>

                <label>Nome:</label>
                <input className="Input-form-cadastro" id="nome" type="text" required placeholder="Informe seu nome"></input>

                <label>Data de nascimento:</label>
                <input className="Input-form-cadastro" type="date" required placeholder="Informe a data de nascimento"></input>

                <label>E-mail:</label>
                <input className="Input-form-cadastro" type="email" required placeholder="Informe seu email"></input>

                <label>Senha:</label>
                <input className="Input-form-cadastro" type="password" required placeholder="Informe sua senha"></input>

                <button className="btn-cadastrar" onClick={() => cadastrar()}>Cadastre-se</button>

            </form>

        </div>
    )

}

export default Cadastro;