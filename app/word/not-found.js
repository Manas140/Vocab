'use client'

import { useRouter } from "next/navigation"
import { FaAngleLeft } from "react-icons/fa6";

export default async function Page() {
  const router = useRouter();

  return (<main className="font-light grid h-full content-center justify-center gap-5">
    <h1 className="flex gap-5 items-center"><b className="text-2xl border-r-2 pr-5 border-hw">404</b> No Such Word</h1>
    <button className="text-lg border-br border-2 rounded-full p-3 hover:bg-al transition-colors items-center flex justify-center" onClick={() => { router.back() }}><FaAngleLeft className="mr-3" /> Go Back</button>
  </main>)
}