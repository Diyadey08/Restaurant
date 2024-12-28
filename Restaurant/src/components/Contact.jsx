import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-black border-2 border-black rounded-lg overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Section: Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-amber-400 mb-6">Contact Us</h1>
            <p className="text-amber-200 mb-8 text-lg leading-relaxed">
              Have questions, feedback, or just want to say hello? We’d love to hear from you! Feel free to reach out to us using the information below or by filling out the contact form.
            </p>
            <div className="text-amber-200 text-lg space-y-4">
              <p className="flex items-center">
                📍 <span className="ml-2">123 Flame Street, Food City, FL 45678</span>
              </p>
              <p className="flex items-center">
                📞 <span className="ml-2">+1 (234) 567-890</span>
              </p>
              <p className="flex items-center">
                ✉️ <span className="ml-2">contact@ignisdinehouse.com</span>
              </p>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-amber-400 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 bg-black text-amber-200 border border-amber-400 rounded focus:outline-none focus:ring focus:ring-amber-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-amber-400 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-black text-amber-200 border border-amber-400 rounded focus:outline-none focus:ring focus:ring-amber-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-amber-400 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 bg-black text-amber-200 border border-amber-400 rounded focus:outline-none focus:ring focus:ring-amber-400"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-semibold py-3 rounded-full hover:bg-amber-400 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
