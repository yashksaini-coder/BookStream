import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './/dashboard'; // Import the Dashboard component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Bookstore</h1>
        
        {/* Include the Dashboard component here */}
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
