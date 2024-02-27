import React, { useState } from 'react';
import bras from './assets/bras2.jpg';
import bras1 from './assets/braslet1.jpg';
 

export default function Bra() {
  const [quantities, setQuantities] = useState([1, 1]);
  const handlePlus = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const handleMinus = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };
    return (
        <>
     <h1 style={{ textAlign: "center" }}>BRASLET</h1>
      <div className='contain'>
        <div className="img">
          <img className="ear-image" src={bras} alt="My Image" />
        </div>
        <div className='word'><h2>DIAMOND BRASLET</h2>
        <h3>$105.00</h3>
        <p className='par'>Crafted with precision and attention to detail, this small single earring embodies simplicity and sophistication. Its compact size allows for easy everyday wear, making it a versatile piece that effortlessly complements any outfit.</p>
        <div className='di'>
        <button className='btn'  onClick={() => handleMinus(0)}>-</button>
        <input type="text" className='intt' value={quantities[0]} style={{ textAlign: 'center' }} onChange/>
        <button className='btn' onClick={() => handlePlus(0)}>+</button>
        <button id='btn'>ADD TO CART</button>
        </div></div>
      </div>
      <div className='contain'>
        <div className="img">
          <img className="ear-image" src={bras1} alt="My Image" />
        </div>
        <div className='word'><h2>Silver Braslet </h2>
        <h3>$205.00</h3>
        <p className='par'>Safety first! ALWAYS! Our Sterling silver jewelry does not contain any poisonous or prohibited metals such as nickel. Please offer our jewelry to your clients with confidant! Rest assured that your customers will enjoy our jewelry with no discomfort or allergies.</p>
        <div className='di'>
        <button className='btn'  onClick={() => handleMinus(1)}>-</button>
        <input type="text" className='intt' value={quantities[1]} style={{ textAlign: 'center' }} onChange/>
        <button className='btn' onClick={() => handlePlus(1)}>+</button>
        <button id='btn'>ADD TO CART</button>
        </div></div>
      </div>
     
    </>
    )
}