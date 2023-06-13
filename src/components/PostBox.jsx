import React, { useState, useRef } from "react";
import { ImageIcon, PollIcon, ScheduleIcon } from "../icons/Icon";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const PostBox = () => {
  const {setNewPost} = useContext(AppContext);
  const inputRef = useRef();
  const [content, setContent] = useState("");

  const handleSend = () => {
    setContent("");
    setNewPost(true);
  }

  const handleBoxClick = () => {
    inputRef.current.focus();
  };

  return (
    <div
      onClick={handleBoxClick}
      className="flex flex-col flex-1 mt-2 px-2 border-b"
    >
      <textarea
        ref={inputRef}
        className="w-full text-md focus:outline-none focus:border rounded-md py-1 px-2 focus:border-sky-400 placeholder-gray-dark outline-none overflow-y-auto resize-none bg-transparent"
        placeholder="Compose new post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex cursor-pointer items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100">
            <ImageIcon className="w-5 h-5 text-gray-100" />
          </div>
          <div className="flex cursor-pointer items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100">
            <PollIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex cursor-pointer items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100">
            <ScheduleIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        {
          content.length > 0 ? <button onClick={handleSend} className="py-1 px-4 border rounded-3xl text-white bg-blue-500 border-blue-400 hover:text-blue-500 hover:bg-white">Send</button> : null
        }
        
      </div>
    </div>
  );
};

export default PostBox;
