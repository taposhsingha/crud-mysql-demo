import React from "react";

export default function WrongInfo() {
  const handleLogin = () => {
    window.location.replace("/login");
  };
  return (
    <div className="mx-auto items-center justify-center">
      You Pushed wrong login Info
      <button
        onClick={handleLogin}
        className="block w-[150px] bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 hover:text-purple-800 transition duration-300"
      >
        Go to Login
      </button>
    </div>
  );
}
