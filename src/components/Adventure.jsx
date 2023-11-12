import React from 'react';
import avatar1 from "../assets/avatar.svg";
import avatar2 from "../assets/avatar (1).svg";
import avatar3 from "../assets/avatar (2).svg";

const Adventure = () => {
  return (
    <>
    <div className='adventure'>
        <div className='avatars'>
            <div className='avatar1'>
              <div>
                <img src={avatar1} alt="" />
                </div>
                <div>
                <h3>Jenny Wilson</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
            </div>
            <div className='avatar2'>
            <img src={avatar2} alt="" />
            <h3>Jenny Wilson</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
            <div className='avatar3'>
            <img src={avatar3} alt="" />
            <h3>Jenny Wilson</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
        </div>
        <div className='tropical'>
          <h1>Tropical Adventure</h1>
           <p>for Students.</p>
           <h4>Student Tropical Vacation: Relax and Recharge</h4>
           <ul className='ul'>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
           </ul>
           <button>Explore more</button>
        </div>
    </div>
    </>
  )
}

export default Adventure;
