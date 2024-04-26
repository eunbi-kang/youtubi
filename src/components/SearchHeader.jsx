import React from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/youtubi/videos/${text}`);
  };
  return (
    <header>
      <Link to='/youtubi'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
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
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
