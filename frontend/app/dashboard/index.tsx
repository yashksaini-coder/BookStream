"use client";
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      setCartItems([]);
      setPurchaseHistory([]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#36D7B7" />
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mt-4 mb-2">Books in Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in the cart. Start shopping now!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Render cart items */}
            </div>
          )}

          <h2 className="text-2xl font-bold mt-4 mb-2">Purchase History</h2>
          {purchaseHistory.length === 0 ? (
            <p>No purchase history available.</p>
          ) : (
            <ul>
              {purchaseHistory.map((purchase) => (
                <li key={purchase.id} className="border-b py-2">
                  <p>{purchase.title} - {purchase.price}</p>
                  <p>Date: {purchase.date}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
