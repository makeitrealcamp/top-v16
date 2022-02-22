import "./Album.css";
function Album(props) {
  return (
    <div>
      <section className="container">
        <div className="album">
          <img src={props.imagen} alt="img1" className="album__img" />
          <aside className="album__information">
            <div className="album__information--artist">
              <h2>{props.artista}</h2>
              <small>solista</small>
            </div>
            <div className="album__information--music">
              <h4>{props.titulo}</h4>
              <small>(2016)</small>
            </div>
            <div className="album__information--buttons">
              <a href="#" className="album__information--button">
                dance
              </a>
              <span className="album__information--love">♡</span>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Album;
