"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import UseAuth from "../ContextApi/UseAuth";

export default function LoginPage() {
  const { signInWithGoogle, setUser } = UseAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogIN = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      setUser(result.user); // Optional, since onAuthStateChanged already handles it
      console.log('User signed in:', result.user);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen flex justify-center items-center">
      <button onClick={handleLogIN} className="btn btn-primary" disabled={loading}>
        {loading ? 'Logging in...' : 'Log in with Google'}
      </button>
    </div>
  );
}
