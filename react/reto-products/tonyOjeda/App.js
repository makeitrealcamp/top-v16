import './product.css';

const productData = [
    {
      img:
        "https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",
      color: "#d4dbf8",
      title: "AirPods",
      price: "129"
    },
    {
      img:
        "https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_3rd_gen__dyuzfy04ht0m_large.png",
      title: "Airpods",
      price: "179"
    },
    {
      img:
        "https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_pro__e9uzt0mzviem_large.png",
      color: "#e8fcd7",
      title: "AirPods Pro",
      price: "249"
    },
    {
      img:
        "https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_max__b14s2x6q07rm_large.png",
      color: "#fdf9de",
      title: "AirPods Max",
      price: "549"
    }
  ];

function Product(props) {
  const products = (
      <div class="container">
        { 
            props.products.map((product) =>
            <div class="product" style={{ backgroundColor: product.color ?? '#fbedf9' }}>
                <div class="product__image">
                    <img src={product.img} alt=""></img>
                </div>
                <div class="product__detail">
                    <h1>{product.title}</h1>
                    <span>${product.price}</span>
                </div>
            </div>
        ) }
      </div>
  );

    return (
        <div>
        {products}</div>
    );

}

function App() {
  return (
    <div className="App">
      <div class="app">
        <h1>Precios</h1>
        <button>Ver Productos</button>
        <Product  products={productData} />
      </div>
    </div>
  );
}

export default App;
