import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import './Checkout.css'

const Checkout = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="checkout__add"
                className="checkout__ad" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. o buy one or more items,
                        click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct item={item.id}/>
                    ))}


                </div>
            )}
        </div>
    )
}

export default Checkout;