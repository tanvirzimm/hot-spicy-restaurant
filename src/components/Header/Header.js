import React, { useEffect, useState } from 'react';
import logo from '../../images/hot-spicy.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCartPlus,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { useAuth } from '../Auth/Auth';
import { useCart } from '../CartContext/CartContext';



const Header = () => {
    const auth = useAuth();
   
    const [cart,setCart] = useCart();
  

  
    //load users previous saved cart
    useEffect(()=> {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
       if(savedCart){
      setCart(savedCart);
    }
  },[]);

    return (
        <div>



<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<div className="container">
<Link to='/'><div> 

    <img src={logo} alt=""/>
    <h1 className='logo navbar-brand'>Restaurant</h1></div>
 
</Link>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     
     <li>
          {
            auth.user &&
                        <Link to='/login'> 
                          <button className='current-user'> 
                            <FontAwesomeIcon icon={faUser} />
                            <span className='user-name'>{auth.user.name}</span>
                         </button> 
                        </Link>
                        

          }
      </li>
                     
      <li> 
               {
                 auth.user ? <button onClick={auth.signOut} className='current-user'>Log Out</button> : <Link to='/login'><button className='current-user'>Sign In</button></Link>
               }                            
      </li>
                       
  

      <li>
          <Link to='/cart'><FontAwesomeIcon className='cart-icon' icon={faCartPlus} />{ cart.length ? <span className='food-items'>{cart.length}</span> : <span></span> } </Link>
      </li>
    </ul>
   
  </div>
  </div>

</nav>


          
        </div>
    );
};

export default Header;