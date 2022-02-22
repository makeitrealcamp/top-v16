import './App.css';
import {productData} from './data/data.js';
import CardProduct from './components/CardProduct';
import React, {useState} from 'react';

function App() {
  const [mostrar, setmostrar] = useState(false);

  const handleMostrar = () => {
    setmostrar(!mostrar);
  }

  return (
    <div className="App">
      <header className="Product">
      </header>
      <main>
        <div className="container">
          <h1>Precios</h1>
          <button onClick={handleMostrar} className="boton">Ver Productos</button>
          {
            mostrar?
            (
              <div className="containerProducts">
                {
                  productData.map(item=>(
                    <CardProduct props={item} />
                  ))
                }
                </div>

            ) :null
            }
        </div>
      </main>
    </div>
  );
}

export default App;
