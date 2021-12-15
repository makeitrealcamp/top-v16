import { useState } from "react";
import CardsContainer from "./CardsContainer";

import "./App.css";

function App() {
  const [displayProducts, setDisplayProducts] = useState(false);
  const handleClick = () => {
    setDisplayProducts(!displayProducts);
  };
  return (
    <div className='App'>
      <h1>Precios</h1>
      <button onClick={handleClick}>Ver Productos</button>
      {displayProducts ? <CardsContainer /> : null}
    </div>
  );
}

export default App;
