import React from 'react';

const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='heading'>
        <h1>Student Special:</h1> 
        <h1>Discounted rates on tropical getaways!</h1>
    </div>
    <div className='para'>
        <p>Let’s embody your beautiful ideas together, simplify the</p>
            <p>way you visualize your next big things.</p>
    </div>
    <div className='lists'>
        <ul className='list1'>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
        </ul>
        <ul className='list2'>
            <li><h4>About</h4></li>
            <li><h4>Schedules</h4></li>
            <li><h4>Pricing</h4></li>
            <li><h4>Membership</h4></li>
            <li><h4>Joins</h4></li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Footer;
