import React from 'react';
import headerboy from "../assets/header-boy.svg";

const Header = () => {
  return (
    <>
    <div className='header'>
    <div className='heading'>
        <h4>Discover the beauty of the tropics</h4>
        <h1>Tropical Destinations For Student</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
        <button>Sign Up</button>
    </div>
    <div className='headerboy'>
        <img src={headerboy} alt="" />
    </div>
    </div>
    </>
  )
}

export default Header;
