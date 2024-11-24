"use client"
import { FaArrowUpRightFromSquare, FaAngleLeft } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchSuggestions } from '@/utils/fetchSuggestions';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
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

    setTypingTimeout(setTimeout(async () => {
      if (value.trim().length >= 3) {
        const data = await fetchSuggestions(value.toLowerCase().trim(), 7);
        setSuggestions(data.map((suggestion) => suggestion.word));
      } else {
        setSuggestions([]);
      }
    }, 1000));
  };

  return (
    <div className='bg-bg grid'>
      <div className='flex items-center gap-5 p-5 py-5 bg-al'>
        <button className="self-center text-2xl" onClick={() => { router.back(); }}><FaAngleLeft /></button>
        <input
          className="bg-al hover:border-bg2 fg-fg2 selection:bg-bg border-0 outline-none text-lg text-fg3"

          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search"
          autocomplete="off"
        />
        {/* <button onClick={() => { }}><FaX /></button> */}
      </div>
      {suggestions.length > 0 && <div className='w-full'>
        <ul className='grid'>
          {suggestions.map((suggestion, index) => (
            <a href={`/word?word=${suggestion}`} key={index} className={(suggestion == searchTerm ? 'text-fg' : 'text-fg2') + " flex items-center gap-5 py-5 border-b-2 border-hw px-7"}><FaArrowUpRightFromSquare />
              {suggestion}</a>
          ))}
        </ul>
      </div>}
    </div>
  );
};

export default Page;