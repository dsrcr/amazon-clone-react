const CheckoutProduct = (id, title, image, price, rating) => {
    return (
        <div className="checkoutProduct" children>
            {/* <img src={image} alt="checkoutProductImage" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>

            </div> */}
        </div>
    )
}

export default CheckoutProduct