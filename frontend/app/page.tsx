import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from ".//dashboard"; // Import the Dashboard component
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <HeroSection />

        {/* Include the Dashboard component here */}
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
