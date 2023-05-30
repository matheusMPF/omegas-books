import "./index.css"

const CardAddBooks = (props) => {

    {
        const {src, alt} = props;
    

    return (
        
            <li className="card-add-book">
               
                <img src={src} alt={alt} className="logo-mais" />

                <div class="add-new-book">
                    <span>{props.newBook}</span>
                </div>

            </li>
        
    );

    }

}

export default CardAddBooks;