import axios from "axios";
import React from "react";
import { Context } from "../../context/Context";
import { useContext, useRef } from "react";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const User = {
        username: userRef.current.value,
        password: passwordRef.current.value,
      };
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        User
      );

      if (
        JSON.stringify(Object.values(User)) ===
        JSON.stringify(Object.values(res.data[0]))
      ) {
        window.location.replace("/");
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
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
                ref={userRef}
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label class="block mb-2 font-bold text-gray-500">Password</label>
              <input
                type="password"
                ref={passwordRef}
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isFetching}
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
