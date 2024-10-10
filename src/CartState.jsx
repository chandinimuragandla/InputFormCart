import React, { useState } from 'react';

function CartState() {
 
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 30 },
    { id: 2, name: 'Product 2', price: 50 },
  ]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? ( 
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartState;
