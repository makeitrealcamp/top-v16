const Card = ({props}) => {
    return ( 
        <div className="card">
            <img alt="card__imagen" src={props.img} />
            <div className="card__content">
                <h3>{props.titulo}</h3>
                <h4>{props.subtitulo}</h4>
                <p>{props.descripcion}</p>
                <p className="card__year">(2016)</p>
                <div className="card__footer">
                    <button className="card__boton">Dance</button>
                    <img src="icons/heart-outline.svg" className="card__icon" />
                </div>
            </div>
        </div>
     );
}
 
export default Card;