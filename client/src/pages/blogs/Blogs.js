import React from "react";
import Blog from "../../components/Blog";

export default function Blogs({blogs}) {
  return (
    <div className="block m-[40px]">
      {blogs.map((b)=>(
        <Blog blog={b}/>
      ))}      
    </div>
  );
}
