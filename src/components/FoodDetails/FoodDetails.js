import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodData from '../../foodData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './FoodDetails.css';


const FoodDetails = (props) => {
    const [count, setCount] = useState(0);
    const { id } = useParams();
    const detailsItem = foodData.find(fd => fd.id === Number(id));
    const { name, price, details, image } = detailsItem;

    return (
    
            <div>

<div className="details-food d-flex">

    <div className="info-side">
        <h1 className='details-name'>{name}</h1>
        <p className='details'>{details}</p>
        <div className="price-and-quantity d-flex">
            <h2 className='details-price'>৳{price}</h2>
            <div className="quantity-manager">
                <span className="plus" onClick={() => setCount(count + 1)}>+</span>
                <input type="text" className='count-value' value={count} readOnly />
                <span className="minus" onClick={() => count > 0 && setCount(count - 1)}>-</span>
            </div>
        </div>
        <Link to='/'>
            <button className='add-button' onClick={() => props.handleCart(detailsItem, count)}>

                <FontAwesomeIcon icon={faShoppingCart} className='shopping-icon' />
                Add

            </button>
        </Link>
    </div>

    <div className="image-side">
        <img src={image} alt="" />
    </div>
</div>

</div>
    );
};

export default FoodDetails;