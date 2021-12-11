

function Album(props) {
    return (
        <div className="album">
            <div className="album__background" >
                <img className="album__background--img" src={props.imagen} alt="imagen" />
            </div>
            <div className="album__description">
                <div className="album__description--artist">
                    <h3 className="description__artist--name">{props.artista}</h3>
                    <p className="description__artist--rol">solista</p>
                </div>
                
                <div className="album__description--info">
                    <h4 className="description__info--title">{props.titulo}</h4>
                    <span>(2016)</span>
                </div>
                <div className="album__description--tags">
                    <a href="#!" className="description__tag">dance</a>
                    <a href="#!" className="description__like">&#x2764;</a>
                </div>
            </div>
        </div>
    )
}

export default Album;