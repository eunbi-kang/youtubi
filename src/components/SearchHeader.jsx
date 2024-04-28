import React from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  /* keyword가 변경될때 마다 setText 함수가 호출됨 */
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="'w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtubi</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "Search..."}
        />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
