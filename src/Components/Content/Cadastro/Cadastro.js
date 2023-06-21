import "./Cadastro.css"

const Cadastro = () => {

    function cadastrar() {
     var valorInputName = document.getElementById('name')
       var nome = valorInputName.value

        alert(nome + " seu cadastro foi realizado com sucesso")
    }

    return (
        <div className="main_form">

                <form className="form">

                    <div className="card_form">

                        <h1>Cadastre-se</h1>

                        <div className="textfield">
                            <label>Nome</label>
                            <input type="name" name="name" placeholder="Nome" id="name" />
                        </div>

                        <div className="textfield">
                            <label for="usuario">E-mail</label>
                            <input type="email" name="usuario" placeholder="E-mail" />
                        </div>

                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" />
                        </div>

                        <button className="btn" onClick={() => cadastrar()}>Cadastrar-se</button>

                        <p id="text_alternative">Já possui uma conta? <a href="//" id="link_alternative">Logar</a></p>

                    </div>
                </form>
            </div>

    )

}

export default Cadastro;