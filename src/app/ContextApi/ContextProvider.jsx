"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { createContext } from "react";
import { useState } from "react";

export const ProviderContext = createContext();

export default function ContextProvider({ children }) {
  const[cart,setCart] = useState('');
  const LogOut = () => signOut();
  const { data: session } = useSession();
  const user = session?.user?.email;
  

  const allInformation = {
    LogOut,
    session,
    user,
    cart,setCart
  };

  return (
    <ProviderContext.Provider value={allInformation}>
      {children}
    </ProviderContext.Provider>
  );
}