import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptionSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log("User Signup Data:", newUser);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between min-h-screen">
      <div>
        {/* Uber logo */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt="Uber Logo"
          className="w-32 mb-5"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-2 mb-7">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-medium rounded px-4 py-2 border w-full text-lg hover:bg-[#333] transition mb-4"
          >
            Login
          </button>

          <p className="text-base text-center">
            Already have a account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>

      {/* ✅ Styled Paragraph */}
      <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
          About Uber
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Uber is a global ride-hailing company founded in 2009 in San Francisco,
          USA. It connects riders who need transportation with drivers through a
          simple mobile app. Uber has revolutionized the transportation industry
          by making it possible to book a ride anytime with just a smartphone and
          internet connection. The service provides transparent fares, real-time
          tracking, estimated arrival times, and multiple payment options.
        </p>
        
      </div>
    </div>
  );
};

export default CaptionSignup;
