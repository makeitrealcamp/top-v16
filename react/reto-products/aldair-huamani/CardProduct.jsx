import './cardProduct.css';
const CardProduct = ({props}) => {
    return (  
        <div style={{backgroundColor: props.color ? props.color : '#fbedf9'}} className="cardBox">
            <img className="cardBox__img" alt={props.title} src={props.img}></img>
            <div className="cardBox__content">
                <h2>{props.title}</h2>
                <p>{props.price}</p>
            </div>
        </div>
    );
}
 
export default CardProduct;