'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition-all duration-200">BookStore</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-200 transition-all duration-200 text-lg">Home</Link></li>
            <li><Link href="/books" className="hover:text-gray-200 transition-all duration-200 text-lg">Books</Link></li>
            <li><Link href="/cart" className="hover:text-gray-200 transition-all duration-200 text-lg">Cart</Link></li>
            {user ? (
              <>
                <li><span className="text-lg">Welcome, {user.name}</span></li>
                <li><button onClick={logout} className="hover:text-gray-200 transition-all duration-200 text-lg">Logout</button></li>
              </>
            ) : (
              <li><Link href="/login" className="hover:text-gray-200 transition-all duration-200 text-lg">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;