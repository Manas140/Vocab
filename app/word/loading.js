"use client";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Loading() {
  const router = useRouter();

  return (
    <main className="p-7 md:p-10 lg:py-20 lg:px-[10vw] grid gap-5 md:gap-7 font-light lg:text-lg motion-safe:animate-pulse">
      <button
        className="md:hidden block self-center text-2xl"
        onClick={() => {
          router.back();
        }}>
        <FaAngleLeft></FaAngleLeft>
      </button>
      <section className="md:flex md:py-0 grid gap-x-7 gap-y-5 md:gap-10 md:gap-y-3 flex-wrap flex-row break-all md:px-12 items-center md:items-stretch pt-24 pb-5">
        <div className="text-5xl md:text-6xl flex gap-5">
          <button
            className="hidden md:block self-center text-2xl"
            onClick={() => {
              router.back();
            }}>
            <FaAngleLeft></FaAngleLeft>
          </button>
          <div className="grid gap-5">
            <h1 className="h-[1em] md:h-[1em] w-72 rounded-lg bg-gradient-loading"> </h1>
            <h1 className="md:hidden h-[0.9em] w-32 rounded-lg bg-gradient-loading"> </h1>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7 gap-5 items-start md:px-10">
        <section className="bg-gradient-loading rounded-lg lg:col-span-2 grid">
          <div className="grid place-items-start border-br p-10 pb-[60vh]">
            <p className="bg-gradient-loading p-4 rounded-lg px-16 "></p>
          </div>
        </section>
        <section className="grid gap-5 col-span-1 lg:gap-7">
          <section className="bg-gradient-loading p-8 pb-[20vh] rounded-lg col-span-1">
            <p className="bg-gradient-loading p-4 rounded-lg w-48"></p>
          </section>
          <section className="bg-gradient-loading p-8 pb-[20vh] rounded-lg col-span-1">
            <p className="bg-gradient-loading p-4 rounded-lg w-48"></p>
          </section>
        </section>
      </section>
    </main>
  );
}
