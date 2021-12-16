function Album(props) {
    return (
        <div className="container">
            <div className="img" >
                <img src={props.imagen}/>
            </div>
            <div className="Album">
                <div className="Album__artista">
                    <h3 className="Album__artista__name">{props.artista}</h3>
                    <span className="Album__artista__rol">{props.rol}</span>
                </div>
                
                <div className="Album__info">
                    <h4 className="Album__info__title">{props.titulo}</h4>
                    <span className="Album__info__year">{props.year}</span>
                </div>
                <div className="Albun__btn">
                    <button>dance</button>
                    <a href="#" >&#x2764;</a>
                </div>
            </div>
        </div>
    )
}

export default Album;