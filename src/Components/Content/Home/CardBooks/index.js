import "./index.css"

const CardBooks = (props) => {

        const {src, alt} = props;
    

    return (
        
            <li className="card-book">
                <div className="name-book">
                    <span>{props.nameBook}</span>
                </div>
                <img src={src} alt={alt} className="imagem-book" />

                <ul className="tipo-genero">
                    <li className={props.genero}>{props.genero}</li>
                </ul>


                <p className="price">{props.price}</p>
                <p className="info">{props.pages}</p>
                <p className="info">{props.author}</p>
                <p className="info">{props.editory}</p>
                

                <button className="btn-purchase">Comprar</button>
            </li>
        
    );


}

export default CardBooks;


