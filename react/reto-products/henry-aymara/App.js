import "./App.css";
import { productData } from "./data";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show_cards: true };
    }

    render() {
        const data_array = productData.map((element, index) => (
            <Card
                img={element.img}
                title={element.title}
                price={element.price}
                bg={element.color}
                id={index}
            ></Card>
        ));

        return (
            <div className="App">
                <h1 className="title">Precios</h1>
                <button
                    className="button_show_prod"
                    onClick={() => {
                        this.setState({
                            show_cards: !this.state.show_cards
                        });
                    }}
                >
                    Ver Productos
                </button>
                {
                  this.state.show_cards ? <div className="cards-container">{data_array}</div>:''
                }
                
            </div>
        );
    }
}

function Card(props) {
    const backgroundColor = props.bg ? props.bg : "#d4dbf8";
    const style = {
        background: backgroundColor
    };
    return (
        <div className="Card" style={style}>
            <img src={props.img} alt="test" className="card__image"></img>
            <div className="card__product__info">
                <h1 className="card__product__title">{props.title}</h1>
                <h2 className="card__product__price">$ {props.price}</h2>
            </div>
        </div>
    );
}

export default App;
