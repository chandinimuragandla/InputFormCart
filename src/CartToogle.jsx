import React, { useState } from 'react';

function CartToggle() {
  const [isCartVisible, setIsCartVisible] = useState(false); 
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 30 },
    { id: 2, name: 'Product 2', price: 50 },
    { id: 3, name:'product 3', price:150},
  ]);

  return (
    <div>
      <button onClick={() => setIsCartVisible(!isCartVisible)}>
        {isCartVisible ? 'Hide Cart' : 'Show Cart'}
      </button>



      {isCartVisible && ( 
        <div>
          <h2>Your Cart</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      )}
      
    </div>
  );
}

export default CartToggle;
