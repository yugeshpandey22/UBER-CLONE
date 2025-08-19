import React, { useState } from 'react';
import { Link } from 'react-router-dom';   // ✅ Link import kiya

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newCaptain = {
      email: email,
      password: password,
    };

    console.log("Captain Data: ", newCaptain);  // ✅ Console me show karega

    // ✅ Form clear karne ke liye
    setEmail('');
    setPassword('');
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email" 
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button 
            type="submit"
            className="bg-[#111] text-white font-medium rounded px-4 py-2 border w-full text-lg hover:bg-[#333] transition mb-4"
          >
            Login
          </button>

          <p className="text-base text-center">
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600 hover:underline">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      {/* ✅ Center aligned + Bigger button */}
      <div className="mt-6 flex justify-center">
        <Link 
          to="/login"
          className="bg-[#64fb7f] text-white font-medium rounded px-8 py-3 border text-lg hover:bg-[#138f89] transition" 
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
