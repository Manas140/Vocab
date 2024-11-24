"use client"
import { FaHeart, FaAngleLeft, FaRegHeart, FaVolumeLow } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

const Actions = ({ word, phonetic, audioURL }) => {
  const [save, setSave] = useState(false);
  let store = JSON.parse(localStorage.getItem("Saves")) || []
  const router = useRouter();

  function remove() {
    const index = store.findIndex((element) => {
      return JSON.stringify(element) === JSON.stringify(word);
    });

    if (index != -1) {
      store.splice(index, 1)
    }
  }

  useEffect(() => {
    if (store.findIndex((element) => {
      return JSON.stringify(element) === JSON.stringify(word);
    }) != -1) {
      setSave(true)
    }
  }, [])

  useEffect(() => {
    save ? (store.push(word)) : (remove())
    localStorage.setItem("Saves", JSON.stringify(store))
  }, [save])

  function play() {
    var audio = new Audio(audioURL);
    audio.play();
  }

  function toggle() {
    setSave(!save)
  }

  return (<>
    <button className="md:hidden block self-center text-2xl" onClick={() => { router.back(); }}><FaAngleLeft></FaAngleLeft></button>
    <section className="md:flex md:py-0 grid gap-x-7 gap-y-5 md:gap-10 md:gap-y-3 flex-wrap flex-row break-all md:px-12 items-center md:items-stretch pt-24 pb-5 px-3">
      <div className='text-5xl md:text-6xl flex gap-5'>
        <button className="hidden md:block self-center text-2xl" onClick={() => { router.back(); }}><FaAngleLeft></FaAngleLeft></button>
        <h1>{word.toUpperCase()}</h1>
      </div>
      <div className="flex md:gap-0 gap-5 md:items-stretch items-center justify-between md:px-0 ">
        <p className="md:hidden text-lg">{phonetic || `/${word}/`}</p>
        <div className="flex md:gap-5">
          <button disabled={!audioURL} className={(!audioURL ? 'text-fg2 hover:bg-al' : 'hover:bg-hw') + " md:bg-al p-3 rounded-full md:px-7 px-5 transition-colors text-xl md:text-base flex gap-5 items-center"} onClick={play}><FaVolumeLow /><span className="hidden lg:block">{phonetic || `/${word}/`}</span></button>
          <button className={"md:bg-al p-3 rounded-full md:px-7 px-5 hover:bg-hw transition-colors md:text-base text-xl flex gap-5 items-center "}  onClick={toggle}>{save ? <><FaHeart className={(save? 'animate-like' : 'animate-none')} /> <span className="hidden xl:block">Saved</span></> : <><FaRegHeart /> <span className="hidden xl:block">Save</span></>}</button>
        </div>
      </div>
    </section>
  </>);
};

export default Actions;
