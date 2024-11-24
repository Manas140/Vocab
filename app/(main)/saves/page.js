"use client"
import { useState, useEffect } from 'react'
import { FaXmark } from "react-icons/fa6";

export default function Page() {

  const [store, setStore] = useState([]);

  useEffect(() => {
    setStore(JSON.parse(localStorage.getItem("Saves")) || []);
  }, []);

  function remove(word) {
    const index = store.findIndex((w) => w === word);

    if (index !== -1) {
      const newStore = [...store];
      newStore.splice(index, 1);
      localStorage.setItem("Saves", JSON.stringify(newStore));
      setStore(newStore);
    }
  }

  return store.length? (<main className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:px-10">
    {
      [...store].reverse().map((word, i) => {
        return <div className="bg-al pr-5 rounded-lg hover:bg-hw transition-colors flex gap-3 items-center justify-between" key={i}>
          <a href={`/word?word=${word}`} className="p-7 w-full">
            <h3>{word.charAt(0).toUpperCase()
              + word.slice(1)}</h3>
          </a>
          <button className="text-bg bg-fg p-3 rounded-lg hover:bg-fg3" onClick={() => remove(word)}><FaXmark /></button>
        </div>
      })
    }
  </main>) : (
    <main className='grid justify-center pt-20 text-center'>
      <h1>Your saves are as empty as my history notebook—<br/>and trust me, that's saying something.</h1>
    </main>
  )
}