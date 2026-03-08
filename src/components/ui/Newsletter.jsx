import React, { useState } from "react";
import { FiMail, FiCheck } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Join the Circle</h2>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Get VIP access to limited drops, exclusive sales, and
          behind-the-scenes content
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <FiMail className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-3 font-bold uppercase rounded-lg hover:bg-yellow-600 transition flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
          >
            {submitted ? (
              <>
                <FiCheck /> Done
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>

        {submitted && (
          <p className="text-yellow-400 mt-4 text-sm font-semibold">
            ✓ Welcome to EL CHAPO VIP!
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
