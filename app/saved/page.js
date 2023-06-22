"use client"
import Deck from '@/components/deck';
import { useEffect, useState } from 'react';
import Loading from '../loading';

export default function Saved() {

  const [list, setList] = useState([])

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("Saved")))
  }, [])

  return(
    <main className='grid mb-20'>
      {(list.length > 0)? ( <Deck list={list}></Deck> )
      : ( <Loading /> )
      }
    </main>
  )
}