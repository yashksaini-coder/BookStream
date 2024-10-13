import Image from "next/image";
import React from "react";
import landingPageImg from "../assets/landingPage img.png";

export default function HeroSection() {
  return (
    <div className="flex self-center">
      <div className="space-y-12">
        {" "}
        <h1 className="md:text-4xl text-3xl font-bold my-6">Welcome to Our Bookstore</h1>
        <h1 className="md:text-5xl text-3xl font-bold mb-6">
          Discover Worlds, One Book at a Time.
        </h1>
        <div>
          <p className="mb-2">Find your favorite books</p>
          <div className="flex w-full max-w-sm items-center space-x-2 ">
            <input
              type="text"
              placeholder="Email"
              name="book"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-3 py-2 border text-white rounded-md focus:outline-none focus:ring-2 bg-blue-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <Image src={landingPageImg} alt="books" width={700} className="hidden md:block" />
    </div>
  );
}
