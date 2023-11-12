import React from 'react';
import girl1 from '../assets/heroein.svg';

const Discount = () => {
  return (
    <>
    <div className='discount'>
        <div className='student-discount'>
            <p>Get 20% off for student</p>
            <h1>Student discounts available.</h1>
            <p>Get ready for some fun in the sun!</p>
            <ul className='list'>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
           </ul>
           <button>Explore more</button>
        </div>
        <div>
            <img src={girl1} alt="" />
        </div>
    </div>
    </>
  )
}

export default Discount;
