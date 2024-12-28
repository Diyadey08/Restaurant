import React from "react";
import { Link } from "react-router-dom"
export default function AboutSection() {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-black border-2 border-amber-400 rounded-lg overflow-hidden shadow-2xl">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-amber-400 mb-6 flex items-center justify-center">
            About Ignis Dine House
          </h1>

          <p className="text-amber-200 mb-4 text-lg leading-relaxed">
            Welcome to Ignis Dine House, where the warmth of the oven meets the passion for flavor. Nestled in the heart of culinary excellence, Ignis Dine House is your destination for handcrafted, delicious pizzas that ignite your taste buds with every bite.
          </p>

          <p className="text-amber-200 mb-4 text-lg leading-relaxed">
            At Ignis, we believe in the art of creating the perfect pizza—starting with freshly kneaded dough, rich, flavorful sauces, and premium toppings sourced from the finest ingredients. From classic Margheritas to bold gourmet creations, each pizza is a masterpiece designed to satisfy every craving.
          </p>

          <p className="text-amber-200 mb-4 text-lg leading-relaxed">
            Our cozy, flame-inspired ambiance provides the perfect setting for a casual family dinner, a night out with friends, or even a solo treat-yourself moment. Pair your pizza with our curated selection of beverages and desserts for an unforgettable dining experience.
          </p>

          <p className="text-amber-200 mb-4 text-lg leading-relaxed">
            Come experience the magic of Ignis Dine House, where every bite is a spark of joy, and every meal feels like home. Ignite your hunger, and let us do the rest!
          </p>

          {/* Center the button */}
          <div className="flex justify-center mt-6">
            <a
              href="/Page"
              className="inline-block bg-amber-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
