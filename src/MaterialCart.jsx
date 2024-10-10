import React from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const MaterialCart = () => {
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: 'Product 1', price: 30 },
    { id: 2, name: 'Product 2', price: 50 },
  ]);

  const [isCartVisible, setIsCartVisible] = React.useState(false);

  return (
    <div style={{ padding: '20px' }}>
        <h1>USING MaterialUI</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        {isCartVisible ? 'Hide Cart' : 'Show Cart'}
      </Button>

      {isCartVisible && (
        <div>
          <Typography variant="h6" gutterBottom>
            Your Shopping Cart
          </Typography>
          {cartItems.length > 0 ? (
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id} divider>
                  <ListItemText
                    primary={item.name}
                    secondary={`Price: $${item.price}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1">Your cart is empty.</Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default MaterialCart; 