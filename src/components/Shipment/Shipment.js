import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Shipment.css';
import { useAuth } from '../Auth/Auth';
import PriceDetails from '../PriceDetails/PriceDetails';
import { useCart } from '../CartContext/CartContext';

const Shipment = () => {
    const [cart,setCart] = useCart();
    const auth = useAuth();
    const { name, email } = auth.user;
    const [deliveryDetail, setDeliveryDetail] = useState(null);
    const [payment,setPayment] = useState(false)
    const [orderComplete,setOrderComplete] = useState(false);
    
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => setDeliveryDetail(data);
     console.log(deliveryDetail);
     console.log(orderComplete);
    return (
        <div>
            <div className="container component-spacing">
                <div className="row">
                    <div className="col-md-8">
                        {
                            orderComplete ? 
                            <div className="thanks">
                                <h1 className='thanks-msg'>Thank You For Ordering Food From</h1>
                                <h1 className='restaurant-name'>Hot Spicy Restaurant</h1>
                            </div>
                             :

                            <div className="user-details-info">
                            <h2 className='shipment-top-header'>Edit Delivery Details</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className='shipment-form'>

                                <input name="name" defaultValue={name} ref={register({ required: true })} placeholder="Your name" />
                                {errors.name && <span>This field is required</span>}
                                <input name="email" defaultValue={email} ref={register({ required: true })} placeholder="Email address" />
                                {errors.email && <span>This field is required</span>}
                                <input name="phone" ref={register({ required: true })} placeholder="Phone Number" />
                                {errors.phone && <span>This field is required</span>}
                                <input name="address1" ref={register({ required: true })} placeholder="Road,House NO" />
                                {errors.address1 && <span>This field is required</span>}
                                <input name="address2" ref={register({ required: true })} placeholder="City" />
                                {errors.address2 && <span>This field is required</span>}
                                <input name="postcode" ref={register({ required: true })} placeholder="Postal Code" />
                                {errors.postcode && <span>This field is required</span>}

                                <input type="submit" />
                            </form>

                        </div>
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="pplace-order">
                            <h4 className='arrival-report'>From: <span className="arrival-report-info"> Hot Spicy Restaurant</span></h4>
                            <h4 className='arrival-report'>To:
                                {deliveryDetail && 
                                <span>
                                    <span className="arrival-report-info">{deliveryDetail.address1}</span> , <span className="arrival-report-info">{deliveryDetail.address2}</span>
                                </span>
                                }
                            </h4>
                            <h4 className='arrival-report'>Arriving in:{deliveryDetail && <span className="arrival-report-info">20-30 min</span>}</h4>
                            
                            
                            {
                                !orderComplete &&
                                <div className="payment-area">
                                    <PriceDetails></PriceDetails>
                                    <h1 className="payment-header">Select Payment Method</h1>
                                    <form action="">
                                        <input type="checkbox" name="cash" id='cash' onChange={() => setPayment(!payment)}/>
                                        <label htmlFor="cash">Cash On Delivery</label>
                                    </form>

                                    {
                                        deliveryDetail && payment ? <button className='main-button' onClick={() => {setOrderComplete(true); setCart([]); localStorage.setItem('cart', JSON.stringify([]));}}>Place Order</button> : <button className='disabled-button' disabled>Place Order</button>
                                    }
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;