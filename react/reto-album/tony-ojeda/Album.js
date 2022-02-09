import './App.css'

function Album(props) {
  return (
    <div class="card">
      <div class="card__left">
        <img src={props.image} alt="" ></img>
      </div>
      <div class="card__right">
        <h1 class="card__author">{props.artist}</h1>
        <span class="card__description">solista</span>
        <span class="card__title">{props.artist}</span>
        <span class="card__date">(2016)</span>
        <div class="categories">
            <p class="categorie">dance</p>
            <div class="like">
                <img src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png" alt="" ></img>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
