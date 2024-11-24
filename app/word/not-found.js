'use client'

import { useRouter } from "next/navigation"

export default async function Page() {
  const router = useRouter();

  return (<main className="font-light grid h-full content-center justify-center gap-5">
    <h1 className="flex gap-5 items-center"><b className="text-2xl border-r-2 px-5 border-hw">404</b> No Such Word</h1>
    <button className="text-lg border-br border-2 rounded-full p-3 hover:bg-al transition-colors" onClick={() => {  }}>Go Back</button>
  </main>)
}