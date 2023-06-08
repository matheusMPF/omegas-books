import "./Colecoes.css"
import GeneroBooks from "./GeneroBooks/GeneroBooks";

const Colecoes = () => {

    return (

        <>
            <GeneroBooks containerGenero="container-infantil" genero="Infantil" />
            <GeneroBooks containerGenero="container-suspense" genero="Suspense" />
        </>

    );

}

export default Colecoes;