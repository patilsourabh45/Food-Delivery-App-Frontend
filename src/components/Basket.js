import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (

          <div key={item.id} class="container">
            <div class="row">
              <div class="col">
                {item.name}
              </div>
              <div class="col">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>
              <div class="col">
                {item.qty} x ₹{item.price.toFixed(2)}
              </div>
            </div>
          </div>

        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div class="container">
              <div class="row">
                <div class="col">
                Items Price
                </div>
                <div class="col">
                ₹{itemsPrice.toFixed(2)}
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                Tax Price
                </div>
                <div class="col">
                ₹{taxPrice.toFixed(2)}
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                Shipping Price
                </div>
                <div class="col">
                ₹{shippingPrice.toFixed(2)}
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                Total Price
                </div>
                <div class="col">
                <strong>₹{totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
