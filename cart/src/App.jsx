import React, { useState } from 'react';
import './ShoppingCart.css'; // Import the CSS file for styling

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, price };
    setItems([...items, newItem]);
    setName('');
    setQuantity(0);
    setPrice(0);
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      <div className="form-container">
        <form onSubmit={handleAddToCart}>
          <label>
            Name:
          </label>
          <input type="text" value={name} onChange={handleNameChange} />
          <br />
          <br />
          <label>
            Quantity:
          </label>
          <input type="number" value={quantity} onChange={handleQuantityChange} />
          <br />
          <br />
          <label>
            Price:
          </label>
          <input type="number" value={price} onChange={handlePriceChange} />
          <br />
          <br />
          <button type="submit">Add to Cart</button>
          <hr className='hr'/>
        </form>
        
      </div>
      
      <div className="cart-section">
        
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total Price: {calculateTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;