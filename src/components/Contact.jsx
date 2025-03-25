import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    alert(`Your Message: ${message}`); 
    setMessage("Invalid Support for now!!")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-green-400 mb-4">Contact Us</h1>
      <p className="max-w-2xl text-center text-lg mb-6">
        Have questions? We'd love to hear from you! Fill out the form below or 
        reach us via email or phone.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            value={message}  // Controlled input
            onChange={(e) => setMessage(e.target.value)}  // Update state
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-6 text-center">
        <p>Email: <a href="mailto:bhushan752002@gmail.com" className="text-green-400 hover:underline">bhushan752002@gmail.com</a></p>
        <p>Phone: <span className="text-green-400">+91 9145789762</span></p>
      </div>
    </div>
  );
};

export default Contact;
