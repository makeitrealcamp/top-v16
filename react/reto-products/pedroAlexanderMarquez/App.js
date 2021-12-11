import { useState } from "react";
import "./App.css";
import { productData } from "./data";

function App() {
  const [showCard, setCard] = useState("none");
  function ShowCards() {
    setCard(showCard === "none" ? "grid" : "none");
  }
  return (
    <div className="container">
      <h1>Precios</h1>
      <button className="btn" onClick={ShowCards}>
        Ver Productos
      </button>
      <section className="cards" style={{ display: showCard }}>
        {productData.map((product, index) => {
          return (
            <CardProducto
              key={index}
              img={product.img}
              title={product.title}
              price={product.price}
              color={
                typeof product.color === "undefined" ? "#fbedf9" : product.color
              }
            />
          );
        })}
      </section>
    </div>
  );
}

function CardProducto(props) {
  return (
    <section className="card" style={{ background: props.color }}>
      <img className="card__img" src={props.img} alt="" />
      <div className="information">
        <h3 className="card__title">{props.title}</h3>
        <h4>{`$ ${props.price}`}</h4>
      </div>
    </section>
  );
}

export default App;
