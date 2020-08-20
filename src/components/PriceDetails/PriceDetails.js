import React, { useState, useEffect } from 'react';
import './PriceDetails.css'
import { useCart } from '../CartContext/CartContext';



const PriceDetails = () => {

    const [cart,setCart] = useCart();

   



   useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if(savedCart){
        setCart(savedCart);
      }
}, []);

const totalFoodPrice = cart.reduce((total,fd) => total + fd.price * fd.quantity,0);


   let shipping = 50;

   if(totalFoodPrice >300){
            shipping = 0;
   }

   let tax = totalFoodPrice/10;

   let grandTotal = shipping+tax+totalFoodPrice;




    return (
        <div>
            <div className="cart-price-details">
                    <h3 className='price-titles'>Total Food Item : <span className="amount">{cart.length}</span></h3>
                    <h3 className='price-titles'>Total Food Price : <span className="amount">{totalFoodPrice}</span> Taka</h3>
                    {
                        shipping > 0 && <h3 className='price-titles'>Delivery Charge: <span className="amount">{shipping}</span> Taka</h3> 
                    }
                    <h3 className='price-titles'>Tax : <span className="amount">{tax}</span> Taka</h3>
                    <h3 className='price-titles'>Total (inc tax,delivery) : <span className="amount">{grandTotal}</span> Taka</h3>
                </div>
        </div>
    );
};

export default PriceDetails;