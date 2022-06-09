import React, { useState } from "react";
import axios from "axios";

export default function AddNews() {
  const [News_title, setNews_title] = useState("");
  const [News_Author, setNews_author] = useState("");
  const [News_Content, setNews_Content] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      News_title: News_title,
      News_Author: News_Author,
      News_Content: News_Content,
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/setpost",
        newPost
      );
    } catch (err) {
      console.log(err);
    }
  };
  const replace = () => {
    window.location.replace("/");
  };
  return (
    <div>
      <div className="w-4/5 flex items-center justify-center mx-auto">
        <div className="bg-white rounded  w-[1100px] ">
          <form className="space-y-4 ml-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-bold text-gray-500">
                Enter Title:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setNews_title(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-500">
                Enter News Author:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setNews_author(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-500">
                Write News Content:
              </label>
              <textarea
                type="text"
                className="w-4/5 border border-purple-200 h-[200px] rounded outline-none focus:border-blue-500"
                onChange={(e) => setNews_Content(e.target.value)}
              />
            </div>
            <button
              className="block mt-2 ml-2 w-24 bg-blue-400 hover:bg-blue-300 p-[8px] rounded text-blue-900 hover:text-blue-800 transition duration-300"
              type="submit"
              onClick={replace}
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
