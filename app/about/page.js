import Link from "next/link"

export default function About() {
  return (
    <main className='flex flex-col m-10 mx-20 text-center justify-center items-center h-[60vh]'>
      <h1 className="first-letter:text-5xl text-2xl like py-10 font-bold">.Vocab</h1>
      <p className="first-line:pl-5 w-[80vw] md:w-[70vw] xl:w-[50vw] text-md tracking-tight">
      .Vocab: An online word database with the aim of making learning new vocabulary easier for students, professionals, and language enthusiasts alike.
      </p>
      {/* <br /> */}
      {/* <Link href="add" className="p-5 border-2 border-gray justify-self-center hover:border-gray-light transition-colors rounded-md">Contribute by adding a word</Link> */}
    </main>
  )
}