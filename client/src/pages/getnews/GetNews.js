import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Blogs from "../blogs/Blogs";
import axios from "axios";

export default function GetNews() {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  const author = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/getnews/${author}`
      );
      console.log(res.data);
      setBlogs(JSON.stringify(Object.values(res.data[0])));
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      Blogs created By {author}
      <div className="m-[30px]">
        <Blogs blogs={blogs} />
      </div>
    </div>
  );
}
