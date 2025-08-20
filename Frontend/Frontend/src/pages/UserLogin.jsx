import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    setUserData(newUser);   // state update
    console.log(newUser);   // console log for checking

    // ✅ Form clear karne ke liye
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-7 flex flex-col justify-between min-h-screen">
      
      <div>
        {/* Uber logo */}
        <img 
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" 
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

          <p className="text-base">
            New here?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create a new Account
            </Link>
          </p>
        </form>
      </div>

      <div className="mt-6">
        <Link to="/captain-login">
          <button
            className="bg-[#1da9a2] text-white font-medium rounded px-4 py-2 border w-full text-lg hover:bg-[#138f89] transition"
          >
            Sign in as Captain
          </button>
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
