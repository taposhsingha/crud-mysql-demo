import axios from "axios";
import React, { useState } from "react";
import App from "../../App";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const User = {
      username: username,
      password: password,
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        User
      );
      if (
        JSON.stringify(Object.values(User)) ===
        JSON.stringify(Object.values(res.data[0]))
      ) {
        window.location.replace("/");
      }
    } catch (err) {
      window.location.replace("/wrongInfo");
    }
  };
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-slate-800">
        <div class="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 class="font-poppin font-bold text-3xl mb-10 text-purple-800">
            Login your Account
          </h2>
          <form class="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label class="block mb-2 font-bold text-gray-500">Name</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label class="block mb-2 font-bold text-gray-500">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 hover:text-purple-800 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
