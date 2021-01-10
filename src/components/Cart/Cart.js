import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }


    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    var shippingCost = 0;
    if (totalPrice > 35) {
        shippingCost = 0;
    }
    else if (totalPrice > 15) {
        shippingCost = 4.99;
    }
    else if (totalPrice > 0) {
        shippingCost = 12.99;
    }

    const tax = formatNumber(totalPrice / 10);
    const grandTotal = formatNumber(totalPrice + shippingCost + tax)

    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: ${shippingCost}</small></p>
            <p><small>Tax + VAT: ${tax}</small></p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;