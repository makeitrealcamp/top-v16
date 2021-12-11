import './App.css';
import { useState } from 'react';
import {productData} from './data';
function App() {
  const [show, showProducts] = useState(false);
 
  return (
    <div>
      <h1>Precio</h1>
      <button type="button" onClick={() => showProducts(true)}>Ver Productos</button>
      {
        show && (
          <div className="cards">
          {
            productData.map((product, index) => <Product color={product.color} img={product.img} title={product.title} price={product.price} key={index}></Product>)
          }
          </div>
        )
      }
      
    </div>
  );
}

function Product(props) {
  return (
    <div className="card" style={{backgroundColor: props.color || '#fbedf9'}}>
      <img className="card__img" src={props.img} alt="product" />
      <h4 className="card__title"><strong>{props.title}</strong></h4>
      <small className="card__price">${props.price}</small>
    </div>
  );
}

export default App;
