import React, { useState} from 'react';
import './FoodItem.css';
import { useCart } from '../CartContext/CartContext';
const FoodItem = (props) => {
    
    const foodItem = props.foodItem;
    const {id,name,image,shortDetails,price,quantity} = foodItem;
    const [count,setCount] = useState(quantity);
  
  
    return (
      
       <div className='single-food-item'>
        
            <img src={image} alt=""/> 
            <h2 className='item-name'>{name}</h2>
            <h3 className='item-short-details'>{shortDetails}</h3>
            <h2 className='item-price'>{price} ৳</h2>

            {
              props.showQuantity && <div>
                 
                    <div className="update-quantity-area d-flex justify-content-center">
                    <div className='quantity-manager'> 
                    <span onClick={() => setCount(count+1)} className='plus'>+</span> 
                    <input type="text" value={count} className='count-value' readOnly/>
                    <span onClick={() => count > 0 && setCount(count-1)} className='minus'>-</span>
                   
                  </div>
                  <button className='update' onClick={() => props.updateQuantity(count,foodItem)}>Update</button>
                    </div>
                 </div>
            }
          
            {
              props.showRemoveButton && <button className='remove-button' onClick={() => props.handleReviewCart(foodItem)}>Remove</button>
            }

           
          
        </div>
     
    );
};

export default FoodItem;