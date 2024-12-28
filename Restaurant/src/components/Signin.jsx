import React from "react";

export function SignInPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-amber-500">
      <div className="w-full max-w-md space-y-8 p-8 border border-amber-500 rounded-md shadow-lg">
        <h1 className="text-center text-2xl font-bold">Sign In</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-amber-500 text-amber-500 placeholder-amber-500/50 px-4 py-2 rounded-md focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-black border border-amber-500 text-amber-500 placeholder-amber-500/50 px-4 py-2 rounded-md focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
