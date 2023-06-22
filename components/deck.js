import Card from '@/components/card.js' 
import React, { useEffect, useState } from 'react';

export default function Deck( {list} ) {

  const [cols, setCols] = useState(4);
  const [arr, setArr] = useState([]);

  function resize() {
    const w = window.innerWidth;
    (w <= 640)? ( setCols(1) ) : (w <= 1024)? ( setCols(2) ) :( w <= 1280)? ( setCols(3) ) : ( setCols(4) )
    
    let array = [];

    if (cols > 1) {
      for (let i = 0; i < cols; i++) {
        let column = [];
        for (let j = i; j < list.length; j += cols) {
          column.push(list[j]);
        }
        array.push(column);
      }
    }
    else {
      array = [list]; 
    }
    setArr(array)
  }
  
  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [arr])

  useEffect(() => {
    resize()
  }, [list])

  return(
    <main className='grid gap-5 m-10 mb-20 cols justify-self-center'>
      <style jsx>{`
        .cols {
         grid-template-columns: repeat(${cols}, minmax(0, 1fr));
        }
      `}</style>
      {
        arr.map((col, i) => {
          return <div className='gap-y-5 flex flex-col'>
            {
              col.map((data, i) => { 
                return <Card word={data.key || data[0]} def={data.val || data[1]}></Card>
              })
            }
          </div>
        })
      }
    </main>
  )
}
