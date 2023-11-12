import React from 'react';
import card1 from '../assets/harvard.svg';
import card2 from '../assets/stanford.svg';
import card3 from '../assets/oxford.svg';
import card4 from '../assets/nanyangung.svg'

const Destinations = () => {
  return (
    <>
    <div className='main'>
    <h1>Our Destinations</h1>
    <div className='cards'>
        <div className='card1'>
            <img src={card1} alt="" />
            <h1>Harvard University</h1>
            <p>Cambridge, Massachusetts, UK</p>
        </div>
        <div className='card2'>
            <img src={card2} alt="" />
            <h1>Standford University</h1>
            <p>Stanford, California</p>
        </div>
        <div className='card3'>
            <img src={card3} alt="" />
            <h1>Oxford University</h1>
            <p>Oxford, England</p>
        </div>
        <div className='card4'>
            <img src={card4} alt="" />
            <h1>Nanyangung technology</h1>
            <p>Nanyang Ave, Singapura</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Destinations;
