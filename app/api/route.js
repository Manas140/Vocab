import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
export const dynamic = 'force-dynamic'

export async function GET() {
  let list = [];
  
  for (let i=0; i < 4; i++) {
    try {
      const key = await kv.randomkey();
      try {
        const val = await kv.get(key);
        list.push({key: key, val: val});
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return NextResponse.json(list);
}