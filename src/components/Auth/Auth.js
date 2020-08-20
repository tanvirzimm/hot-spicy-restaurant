import React,{ useState, createContext, useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { Redirect, Route } from "react-router-dom";


firebase.initializeApp(firebaseConfig);

const Authcontext = createContext();

export const AuthcontextProvider = (props) => {
const auth = Auth();
return <Authcontext.Provider value={auth}>{props.children}</Authcontext.Provider>
}

export const useAuth = () => useContext(Authcontext);




export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    
    return (
      <Route
      {...rest}
      render={({ location }) =>
      auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname:"/login",
              state: { from: location }
            }}
         
          />
        )
      }
    />
    );
  }





const Auth = () => {

    const [user,setUser] = useState(null);
   

    const provider = new firebase.auth.GoogleAuthProvider();

    const googleSign = () => {

        return firebase.auth().signInWithPopup(provider).then(function(result) {
           
            const {displayName,email,photoURL} = result.user;
            const newUser = {
                name:displayName,
                email,
                image:photoURL,
                logInStatus:true
            }

            setUser(newUser);
            
          }).catch(function(error) {
                console.log(error.message);
          });
    }

    const signOut = () => {
        return firebase.auth().signOut().then(function() {
        
            setUser(null);
          }).catch(function(error) {
           
          });
    }

useEffect(()=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        const {displayName,email,photoURL} = user;
        const newUser = {
            name:displayName,
            email,
            image:photoURL,
            logInStatus:true
        }

        setUser(newUser);
    } else {
     
    }
  });
},[])

    return {
        user,
        googleSign,
        signOut
    }

}