import React from 'react';

import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => (
  <div className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} />
    </div>
    <ul className='app_navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
    </ul>
  </div>
);

export default Navbar;
