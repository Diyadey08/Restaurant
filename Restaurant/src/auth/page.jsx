import React, { useState } from "react";
import { motion } from "framer-motion";


export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 ${activeTab === 'signup' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
            <button
              className={`flex-1 py-2 ${activeTab === 'signin' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('signin')}
            >
              Sign In
            </button>
          </div>

          {activeTab === 'signup' ? (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 py-2 px-2"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 py-2 px-2"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 py-2 px-2"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 py-2 px-2"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign Up
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label htmlFor="signinEmail" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="signinEmail"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 py-2 px-2"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="signinPassword" className="block text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  id="signinPassword"
                  name="password"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 py-2 px-2"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign In
              </button>
            </form>
          )}
        </div>
      </main>
  );
}
