
import './App.css';
//import ComponentAlbum  from './brayanMartinez/Album';
import  {productData}  from './../data';

function App() {
  return (
  
    <>
      
      <h2 >Precios</h2>
      <button  className='btn'>Ver Productos</button>
      <div className='content'>
      {productData.map((product,index) =><Product key={index} color={product.color} img={product.img}  title={product.title}  price={product.price}  />)}
      </div>
    </>
    
  );
}

function Product(props){
  return (
 
     
        <card  className='content__card' style={{background:props.color}}>
          <img className='content__img' src={props.img} alt="" />
          <h5>{props.title}</h5>
          <span>$ {props.price}</span>
        </card>

    
   

  )
}


export default App;
