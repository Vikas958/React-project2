import React from 'react';
import girl2 from '../assets/booking-sec-heroein.svg';

const Booknow1 = () => {
  return (
    <>
    <div className='booknow '>
        <div className='imggirl'>
            <img src={girl2} alt="" />
        </div>
        <div className='booking'>
            <h1>Book now</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h4>city</h4>
            <input placeholder='placeholder'></input>
            <h4>Arrival</h4>
            <input type="text" name="" id="" placeholder='10 october'/>
            <h4>Departure</h4>
            <input type="text" placeholder='11 october' />
              <h4>Star</h4>
              <input placeholder='4'></input>
              <h4>Room</h4>
              <input type="text" placeholder='1'/>
            <button>Book now</button>
        </div>
    </div>
    </>
  )
}

export default Booknow1;
