"use client";

import { useRouter } from 'next/navigation'
import UseAuth from "../ContextApi/UseAuth";

 export default function page() {
  const{signInWithGoogle}=UseAuth();
  const router = useRouter();

  const handleLogIN = () => {
    signInWithGoogle()
    router.push('/dashboard')
  }

   return (
     <div>
      <div>
        <button onClick={()=>handleLogIN()}>Log in</button>
      </div>
     </div>
   )
 }
 
