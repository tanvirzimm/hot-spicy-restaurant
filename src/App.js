import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Food from './components/Food/Food';
import { CartContextProvider } from './components/CartContext/CartContext';
import { AuthcontextProvider, PrivateRoute } from './components/Auth/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Shipment from './components/Shipment/Shipment';
import FoodDetails from './components/FoodDetails/FoodDetails';

function App() {
  return (

    <div>
      <CartContextProvider>
       <AuthcontextProvider>
        
     

         <Router>

          <Header></Header>
          

          <Switch>
            <Route exact path='/'>
              <Food></Food>
            </Route>
            <Route path='/cart'>
              <Cart></Cart>
            </Route>
            
            <PrivateRoute path='/shipment'>
              <Shipment></Shipment>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
         </Router>
        
         
       
      </AuthcontextProvider>
      </CartContextProvider>
    </div>


  );
}

export default App;
