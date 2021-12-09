function Album(props) {
    return (
        <div className="container">
            <img src={props.coverImage} className="container__img" alt="Cover"></img>
            <div className="container__info">
                <div className="container__info__artist">
                    <h1 className="container__info__artist__name">{props.artist}</h1>
                    <span className="container__info__artist__desc">
                        {props.artist_desc}
                    </span>
                </div>
                
                <div className="container__info__song">
                    <h4 className="container__info__song__title">{props.title}</h4>
                    <h4 className="container__info__song__year">({props.year})</h4>
                </div>
                
                <div className="container__info__preference">
                    <button className="container__info__preference__button">{props.tag}</button>
                    <img src="assets/favorite_border_black_24dp.svg" alt="Favorite"></img>
                </div>
            </div>
        </div>
    );
}

export default Album;
