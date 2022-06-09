import React from "react";
import axios from "axios";
export default function Blog({ blog }) {
  const deleteContact = (id) => {
    axios.delete(`http://localhost:5000/api/deletenews/${id}`);
    window.location.reload();
  };
  const handleUpdate = (id) => {
    window.location.replace(`/editnews/${id}`);
  };
  const handleAuthor = (author) => {
    window.location.replace(`/getnews/${author}`);
  };
  return (
    <div className="px-6 py-6 flex flex-wrap shadow-md  rounded-md bg-gray-100">
      <div className="w-[385px] mt-[20px] mr-[25px] mb-[40px] ml-[25px] ">
        <div className="w-full  object-cover">
          <div className="flex flex-col items-center p-[20px]">
            <div className="mt-[8px]">ID: {blog.News_ID}</div>
            <div className="mt-[8px]">Title: {blog.News_title}</div>
            <button
              onClick={() => {
                handleAuthor(blog.News_Author);
              }}
              className="mt-[8px] p-[12px] rounded bg-purple-400"
            >
              Author: {blog.News_Author}
            </button>
            <div className="mt-[10px] ">Content: {blog.News_Content}</div>
            <button
              className="p-[10px] rounded bg-blue-200"
              onClick={() => {
                handleUpdate(blog.News_ID);
              }}
            >
              Edit News
            </button>
            <button
              className="mt-[20px] p-[10px] rounded bg-red-400"
              onClick={() => deleteContact(blog.News_ID)}
            >
              Delete News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
