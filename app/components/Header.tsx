import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition-all duration-200">BookStore</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-200 transition-all duration-200 text-lg">Home</Link></li>
            <li><Link href="/books" className="hover:text-gray-200 transition-all duration-200 text-lg">Books</Link></li>
            <li><Link href="/cart" className="hover:text-gray-200 transition-all duration-200 text-lg">Cart</Link></li>
            <li><Link href="/login" className="hover:text-gray-200 transition-all duration-200 text-lg">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
