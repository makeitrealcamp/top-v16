
export default function ComponentAlbum(props) {

    return (
        <div className="content">
            <img src={props.Imagen} alt="" />
            <div className="content__left">
                <div className="content__section">
                    <h1 className="content__artista">{props.Artista}</h1>
                    <span className="content__description">{props.descripcion}</span>
                </div>
                <div className="content__section">
                    <h3 className="content__title">{props.Titulo}</h3>

                    <span >({props.year})</span>
                </div>
                <div className="content__section flex ">
                    <button className="dance"> dance</button>
                    <img className="ico" src={props.heart} alt="" />
                </div>
            </div>
        </div>
    )
}
