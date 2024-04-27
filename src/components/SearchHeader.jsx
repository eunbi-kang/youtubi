import React from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function SearchHeader() {
  const {keyword} = useParams();
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
    <header>
      <Link to="">
        <BsYoutube />
        <h1>Youtubi</h1>
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
