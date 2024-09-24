import React from 'react';
import {
    Link
} from "react-router-dom";

function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to ="/" aria-label="Go to Home Page">Home</Link></li>
            <li><Link to ="/about" aria-label="Learn more about us">About</Link></li>
            <li><Link to ="/login" aria-label="Login to your account">Login</Link></li>
            <li><Link to ="https://google.com" aria-label="Visit Google browser">Google</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
