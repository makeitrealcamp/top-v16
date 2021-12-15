import './App.css';
import { useState } from 'react';
import { productData } from './data';

function App() {
  const [data, setData] = useState([]);

  const showData = () => {
    setData(productData);
  }

  return (
    <div className="app">
      <h1>Precios</h1>
      <button className="products__btn" onClick={showData}>Ver Productos</button>
      <div className="products__container">
        {
          data.map((x, index) => {
            return <Card product={x} img={x.img} title={x.title} price={x.price} color={x.color} key={index} />
          })
        }
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className='product__card' style={{backgroundColor: props.color || '#fbedf9'}}>
      <img className="product__img" src={props.img}></img>
      <div>
        <h5>{props.title}</h5>
        <p>$ {props.price}</p>
      </div>
    </div>
  )
}

export default App;