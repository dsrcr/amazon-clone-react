import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css';
const CheckoutProduct = ({ id, title, image, price, rating }) => {

    //eslint-disable-next-line
    const [{}, dispatch] = useStateValue();
    const removeFromBasket = (id) => {
        console.log("Remove from basket")
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img src={image} alt="productImage" className="checkoutProduct__image" />
            <p className="checkoutProduct__title">{title}</p>
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>


                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from basket</button>
            </div>


        </div>

    );
}

export default CheckoutProduct