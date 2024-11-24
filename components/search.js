"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchSuggestions } from "@/utils/fetchSuggestions";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(async () => {
        if (value.trim().length >= 3) {
          const data = await fetchSuggestions(value.toLowerCase().trim(), 5);
          setSuggestions(data.map((suggestion) => suggestion.word));
        } else {
          setSuggestions([]);
        }
      }, 1000)
    );
  };

  const handleKeyDown = (event) => {
    if (["Tab", "ArrowUp", "ArrowDown", "Shift", "Enter"].includes(event.key)) {
      event.preventDefault();
    }

    if (((["Tab"].includes(event.key) && event.shiftKey) || ["ArrowUp"].includes(event.key)) && suggestions.length > 0) {
      const currentIndex = suggestions.indexOf(searchTerm);
      const newIndex = (currentIndex - 1 + suggestions.length) % suggestions.length;
      setSearchTerm(suggestions[newIndex]);
    } else if (["Tab", "ArrowDown"].includes(event.key) && suggestions.length > 0) {
      const currentIndex = suggestions.indexOf(searchTerm);
      const newIndex = (currentIndex + 1) % suggestions.length;
      setSearchTerm(suggestions[newIndex]);
    } else if (event.key === "Enter") {
      router.push(`/word?word=${searchTerm}`);
    } else if (event.key === "Escape") {
      setSuggestions([]);
    }
  };

  return (
    <form
      action="/search"
      className={"hover:border-bg2 gap-5 bg-al grid w-72 border-2 border-al " + (suggestions.length > 0 ? "rounded-t-3xl border-bg2" : "rounded-full")}>
      <div className="flex items-center gap-5 px-7 py-3">
        <FaMagnifyingGlass />
        <input
          name="qe"
          className="bg-al hover:border-bg2 fg-fg2 selection:bg-bg border-0 outline-none max-w-[12rem]"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search"
          autoComplete="off"
        />
      </div>
      {suggestions.length > 0 && (
        <div className="-ml-[2px] absolute mt-[3.25rem] bg-al rounded-b-3xl w-72 border-2 border-bg2 border-t-0 pb-3">
          <ul className="grid rounded-b-3xl">
            {suggestions.map((suggestion, index) => (
              <a href={`/word?word=${suggestion}`} key={index} className={(suggestion == searchTerm ? "text-fg" : "text-fg2") + " p-3 px-7"}>
                {suggestion}
              </a>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default Search;
