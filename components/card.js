"use client"

import { useEffect, useState } from "react"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function Card({word, def}) {
  
  const [like, setLike] = useState(false);
  let store = JSON.parse(localStorage.getItem("Saved")) || []

  function remove() {
    const index = store.findIndex((element) => {
      return JSON.stringify(element) === JSON.stringify([word, def]);
    });

    if (index != -1) {
      store.splice(index, 1)
    }
  }

  useEffect(() => {
    if (store.findIndex((element) => {
        return JSON.stringify(element) === JSON.stringify([word, def]); 
      }) != -1 ) {
      setLike(true)
    }
  }, [])

  useEffect(() => {
    like? ( store.push([word, def]) ) : ( remove() )
    store = store.filter((value, index, self) => { return index === self.findIndex((arr) => ( arr[0] === value[0] && arr[1] === value[1] )); });
    localStorage.setItem("Saved", JSON.stringify(store))
  }, [like])
  
  function toggle() {
    setLike(!like)
  }

  return(
      <button onDoubleClick={toggle} className="text-left rounded-md transition-all border-2 border-gray grid bg-gradient-loading hover:border-gray-light max-w-[22em] shadow-xl animate-fade" 
        style={{background: like? ( 'linear-gradient(to bottom right, #A988B020, #101010)' ) : ( 'linear-gradient(to bottom right, #181818, #101010)' )}}
      >
        <svg width="0" height="0">
          <linearGradient id="like" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#D9BC8C" offset="0%" />
            <stop stopColor="#A988B0" offset="100%" />
          </linearGradient>
        </svg>
        <header className="p-10 pb-0 font-bold text-xl capitalize"  > <b className={like? ('like') : ('norm')}>{word}</b></header>
        <p className="p-10 pt-5 text-sm break-word">
          {def}
          {/* <br /> */}
          {/* <br /> */}
          {/* <a href={`https://www.google.com/search?q=define+${word}`} className="text-md font-bold text-blue" >Learn More</a> */}
        </p>
        <button onClick={toggle} className={`relative bottom-5 left-[85%] text-3xl text-gray-light transition-all hover:text-white w-fit ${like? ('animate-like') : ('animate-none')}`}>{like? ( <MdFavorite style={{ fill: "url(#like)" }} ></MdFavorite> ) : ( <MdFavoriteBorder></MdFavoriteBorder> )}</button>
      </button>
    // </button>
  )
}