import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "../blogs/Blogs";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Home() {
  const { user, dispatch } = useContext(Context);
  const [blogs, setBlogs] = useState([]);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:5000/api/getnewses");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="relative">
        <div className="mt-[20px] mx-auto">
          <button onClick={handleLogout}>Logout</button>
          <h1 className="text-center mb-[20px]">News List</h1>
          <h1 className="mb-[20px]">Current user: {user}</h1>
          <a
            className="ml-[40px] rounded p-[10px] bg-green-400"
            href="/addnews"
          >
            Add News
          </a>
          <Blogs blogs={blogs} />
        </div>
      </div>
    </div>
  );
}
