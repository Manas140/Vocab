"use client"
import Deck from '@/components/deck';
import Loading from './loading';
import Buffer from '@/components/buffer';
import { getData } from './data';
import React, { useEffect, useState } from 'react';
export const dynamic = 'force-dynamic'

export default function Home() {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [scroll, setScroll] = useState(0);

  async function load() {
    setLoading(true);
    const data = await getData()
    setList((prev) => [...prev, ...data]);
  }
  
  function handleScroll() {
    if ((window.innerHeight + document.documentElement.scrollTop + 2 <= document.documentElement.scrollHeight) || loading) {
      return;
    }
    load();
  }
  
  useEffect(() => {
    setLoading(false);
    window.scrollTo(0, scroll)
  }, [list])
  
  useEffect(() => {
    load();
    load();
    load();
  }, [])
  
  useEffect(() => {
    setScroll(window.scrollY - 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading])

  return(
    <main className='grid mb-40'>
    {/* {
      (JSON.parse(localStorage.getItem("Saved")).length < 1)? 
      (
        <div className='bg-gray-dark border-b-2 border-gray text-center p-2'>
          <p>Double Click To Like</p>
        </div>
      )
      : ( <></> )
    } */}
    {
      (loading && list.length == 0)? (
        <Loading></Loading>
      )
      : (loading && list.length > 0)? (
        <>
          <Deck list={list} />
          <Buffer></Buffer>
        </>
      )
      : (
        <>
          <Deck list={list} />
          <div className='mt-32'></div>
        </>
      )
      }
      {/* <button className='px-5 p-2 border-2 border-gray bg-gray-dark hover:border-gray-light rounded-md justify-self-center' onClick={load}>Load More</button> */}
    </main>
  )
}