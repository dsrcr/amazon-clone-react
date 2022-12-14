import React from 'react'
import './Subtotal.css'

import { useStateValue } from '../StateProvider/StateProvider'
import { getBasketTotal } from '../../reducer'


const Subtotal = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className='subtotal'>
            {/* <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} /> */}
            <button>Proceed checkout</button>
        </div>
    )
}

export default Subtotal