import "./CardAutor.css"
const CardAutor = (props) => {

        const {src, alt} = props;
    

    return (
        
            <li className="card-author">
                <div className="name-author">
                    <span>{props.nameAuthor}</span>
                </div>
                <img src={src} alt={alt} className="imagem-author" />

                <ul className="obra-author">
                    <li className="obras">{props.obra}</li>
                </ul>


                <p className="resumo">{props.resumo}
                </p>
            </li>
        
    );


}

export default CardAutor;