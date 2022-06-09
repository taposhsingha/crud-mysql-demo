import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "../blogs/Blogs";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
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
          <h1 className="text-center">News List</h1>
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
