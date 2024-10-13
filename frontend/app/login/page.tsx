'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidden, setHidden] = useState<boolean>(true);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (response.ok) {
        login(data);
        router.push('/');
        toast.success('Logged In!!');
      } else {
        // Enhanced error handling
        if (response.status === 400) {
          toast.error("Invalid email or password. Please try again.");
        } else if (response.status === 401) {
          toast.error("Unauthorized access. Please check your credentials.");
        } else if (response.status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    } catch (error) {
      // Handle network errors or unexpected errors
      console.error('An error occurred:', error);
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl text-black font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <div className='relative'>
              <input
                type={hidden ? "password" : "text"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="button" 
                className='absolute top-0 translate-y-1/2 right-2' 
                onClick={() => setHidden(!hidden)} 
                aria-label={hidden ? "Show password" : "Hide password"}>
                {hidden ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-black text-center">
          Don&apos;t have an account? <Link href="/register" className="text-blue-600 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
