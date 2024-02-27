

import React, { useState } from 'react';
import './earrin.css'
import ear1 from './assets/ear1.jpg';
import ear2 from './assets/ear2.webp';
import ear3 from './assets/ear3.jpg';



  
export default function Ear() {
  const [quantities, setQuantities] = useState([1, 1, 1]); // Initial quantities for each 

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
     <h1 style={{ textAlign: "center" }}>EARRING</h1>
      <div className='contain'>
        <div className="img">
          <img className="ear-image" src={ear1} alt="My Image" />
        </div>
        <div className='word'><h2>DIAMOND EARRINGS</h2>
        <h3>$105.00</h3>
        <p className='par'>Crafted with precision and attention to detail, this small single earring embodies simplicity and sophistication. Its compact size allows for easy everyday wear, making it a versatile piece that effortlessly complements any outfit.</p>
        <div className='di'>
        <button className='btn'  onClick={() => handleMinus(0)}>-</button>
        <input type="text" className='intt' value={quantities[0]} style={{ textAlign: 'center' }} onChange/>
        <button className='btn' onClick={() => handlePlus(0)}>+</button>
        <button id='btn'  >ADD TO CART</button>
     

        </div></div>
      </div>
      <div className='contain'>
        <div className="img">
          <img className="ear-image" src={ear2} alt="My Image" />
        </div>
        <div className='word'><h2>Silver Jewelry </h2>
        <h3>$205.00</h3>
        <p className='par'>Safety first! ALWAYS! Our Sterling silver jewelry does not contain any poisonous or prohibited metals such as nickel. Please offer our jewelry to your clients with confidant! Rest assured that your customers will enjoy our jewelry with no discomfort or allergies.</p>
        <div className='di'>
        <button className='btn'   onClick={() => handleMinus(1)}>-</button>
        <input type="text" className='intt' value={quantities[1]}  style={{ textAlign: 'center' }} onChange/>
        <button className='btn' onClick={() => handlePlus(1)}>+</button>
        <button id='btn' on>ADD TO CART</button>
        </div></div>
      </div>
      <div className='contain'>
        <div className="img">
          <img className="ear-image" src={ear3} alt="My Image" />
        </div>
        <div className='word'><h2>White Gold Cluster Earrings </h2>
        <h3>$205.00</h3>
        <p className='par'>Quality is at the heart of everything we do. Each and every piece of our jewelry is hand-inspected to ensure that it meets our high standards before it's shipped to you.</p>
        <div className='di'>
        <button className='btn'  onClick={() => handleMinus(2)}>-</button>
        <input type="text" className='intt' value={quantities[2]} style={{ textAlign: 'center' }} onChange />
        <button className='btn' onClick={() => handlePlus(2)}>+</button>
        <button id='btn'>ADD TO CART</button>
        </div></div>
      </div>
    </>
  )
}