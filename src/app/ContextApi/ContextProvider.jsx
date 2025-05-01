"use client";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import { useState,useEffect } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

export default function ContextProvider({ children }) {
  const[cart,setCart] = useState([]);
  const[user, setUser] = useState(null);
 
 //
 const signInWithGoogle = () => {
  return signInWithPopup(auth,provider)
}
//
const signOutUser = ( ) => {
 return signOut(auth);
}
//
useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      console.log('currently logged in',currentUser)
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    }
  },[])
  

  const allInformation = {
    user, setUser,
    cart,setCart,
    signInWithGoogle,
    signOutUser
 
  };

  return (
    <AuthContext.Provider value={allInformation}>
      {children}
    </AuthContext.Provider>
  );
}