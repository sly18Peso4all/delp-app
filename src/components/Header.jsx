import React from 'react';
import logo from '../img/logo.png';


const Header = () => {
    return  (
    
       <div>
           
          
           <img src={logo} className='logo' alt='logo' />
           {/* <h1 className="font-weight- altdark display-2 text-center">yelp</h1>
           <p className="text-center"> All about You.... </p> */}
       </div>

    )
};

export default Header;