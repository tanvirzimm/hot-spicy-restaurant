import React, { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import { useAuth } from '../Auth/Auth';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import PriceDetails from '../PriceDetails/PriceDetails';
import { useCart } from '../CartContext/CartContext';


const Cart = () => {

    const [cart,setCart] = useCart();
    const auth = useAuth();
    //load users previous saved cart

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if(savedCart){
            setCart(savedCart);
        }
    }, []);


    const handleReviewCart = (foodItem) => {

        let newCart = cart.filter(fd => fd.id !== foodItem.id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    const updateQuantity = (count, foodItem) => {
       if(count>0){
        const toBeUpdate = cart.find(fd => fd.id === foodItem.id)
        const itemPosition = cart.indexOf(toBeUpdate);

        toBeUpdate.quantity = count;
        const others = cart.filter(fd => fd.id !== foodItem.id)
        // let newCart = [toBeUpdate,...others];
        let newCart = [...others];
        newCart[itemPosition] = toBeUpdate;
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
       }
       else{
        const others = cart.filter(fd => fd.id !== foodItem.id)
        setCart(others);
        localStorage.setItem('cart', JSON.stringify(others));
       }
    }

    return (
        <div className='container cart-body'>
            <div className="row">
               {
                   cart.length > 0 && 
                   <div className="col-md-6">
                      <PriceDetails></PriceDetails>
                   </div>
               }

               
                    {
                        cart.length > 0 ?
                        <div className="col-md-6 checkout-or-more">
                            {
                                auth.user ?
                                
                                
                                    <Link to='/shipment'>
                                        <button className='main-button'>Proceed Checkout <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} className='shopping-icon' /></button>
                                    </Link> :
                                   
                                    <Link to='/shipment'>
                                        <button className='main-button'>Please Login To Checkout <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} className='shopping-icon' /></button>
                                    </Link>
                                


                            }
                            <Link to='/'><button className='main-button'>Add More Food<FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} className='shopping-icon' /></button></Link>
                        </div> :


                           <div className="col-md-12 d-flex justify-content-center align-items-center"> <Link to='/' className='link-wrappar'><h1 className='main-button empty-msg'>Please Add Your Food <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} className='shopping-icon' /></h1></Link></div>
                    }
                
            </div>
            {
                !cart.length && <h1 style={{ textAlign: 'center' }}>Cart is empty !!!</h1>
            }

                {
                    cart.length > 0 && <h1 className='cart-heading'>Review Your Cart Before Checkout</h1>
                }

            <div className='row'>
                {
                    cart.map(fd => <div key={fd.id} className="col-md-6 col-lg-4">

                        <FoodItem foodItem={fd} handleReviewCart={handleReviewCart} showQuantity={true} showRemoveButton={true} updateQuantity={updateQuantity}>

                        </FoodItem>

                    </div>
                    )
                }

            </div>



            {
                cart.length > 0 ? <div className='chekout-button'>
                    {
                        auth.user ?
                            <Link to='/shipment'>
                                <button className='main-button'>Proceed Checkout <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} className='shopping-icon' /></button>
                            </Link> :
                            <Link to='/shipment'>
                                <button className='main-button'>Please Login To Checkout <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} className='shopping-icon' /></button>
                            </Link>



                    }
                </div> :
                    <Link to='/' className='link-wrappar'><h1 className='main-button empty-msg'>Please Add Your Food<FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} className='shopping-icon' /></h1></Link>
            }






        </div>
    );
};

export default Cart;