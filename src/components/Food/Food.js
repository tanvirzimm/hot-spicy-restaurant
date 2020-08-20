import React, { useState, createContext, useEffect } from 'react';
import foodData from '../../foodData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodItem from '../FoodItem/FoodItem';
import FoodDetails from '../FoodDetails/FoodDetails';
import backgroundImage from '../../images/bannerbackground.png';
import './Food.css';
import { useCart } from '../CartContext/CartContext';


const Food = () => {

  const [cart,setCart] = useCart();
  const [categoryFoods, setCategoryFoods] = useState([]);
  const [optionStyle,setOptionStyle] = useState('lunch');
  


  // get cart data even after reload the page
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if(savedCart){
      setCart(savedCart);
    }
}, []);


  useEffect(() => {
    const defaultCategoryFoods = foodData.filter(fd => fd.category === 'lunch');
    setCategoryFoods(defaultCategoryFoods);
  }, [])



  const bannerStyle = {
    backgroundImage: `url( ${backgroundImage})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    height:'300px',
    marginTop:'10px'
  }


  const activeOption = {
    color:'#F91944',
    borderBottom:'2px solid #F91944'
  }



  //Find food category by users click


  const findCategory = (category) => {
 
   
    setOptionStyle(category);
    const selectedCategoryFoods = foodData.filter(fd => fd.category === category);

    setCategoryFoods(selectedCategoryFoods);
    
  }


  // manage cart items
  const handleCart = (addedItem, count) => {
    if (count > 0) {
      const sameItem = cart.find(fd => fd.id === addedItem.id);
      let newCart = [];
      if (sameItem) {
        sameItem.quantity = count;
        const others = cart.filter(fd => fd.id !== addedItem.id);
        newCart = [...others, sameItem];
      }

      else {
        addedItem.quantity = count;
        newCart = [...cart, addedItem]
      }

      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  return (
    <div>
      <div className="container">
        



          <div className="row">
           
            <div className="col-md-12 banner-section" style={bannerStyle}>

            </div>
            
          </div>


          {
                cart.length >0 && <Link className='review-link-wrapper' to='/cart'><button className='review-button'>Review Cart</button></Link>
          }

          <Router>
          <div className="category">
            <Link className='category-option' style={optionStyle==='breakfast' ? activeOption:{color:'black'}} to='/' onClick={() =>findCategory("breakfast")}>Breakfast</Link>
            <Link className='category-option' style={optionStyle==='lunch' ? activeOption:{color:'black'}} to='/' onClick={() => findCategory("lunch")}>Lunch</Link>
            <Link className='category-option' style={optionStyle==='dinner' ? activeOption:{color:'black'}} to='/' onClick={() => findCategory("dinner")}>Dinner</Link>
          </div>

      
          <Switch>

            <Route exact path='/'>
              <div className="row">


                {

                  categoryFoods.map(fd => <div key={fd.id} className="col-md-6 col-lg-4"><Link className='item-link-wrapper' to={'/food/' + fd.id}><FoodItem foodItem={fd}></FoodItem></Link></div>)


                }


              </div>

            </Route>

            <Route path='/food/:id'>
              <FoodDetails handleCart={handleCart}></FoodDetails>
            </Route>
            
            <Route path='*'>
                <h1>404 NOT FOUND</h1>
            </Route>

          </Switch>


        </Router>
      </div>
    </div>
  );
};

export default Food;