import Link from "next/link"
import { MdFavorite } from "react-icons/md";

export default function About() {
  return (
    <main className='flex h-[85vh] justify-center gap-10 mx-10 flex-row items-center'>
      <div className="text-lg flex flex-col gap-10 max-w-xl">
        <h1 className="font-bold text-3xl norm">
          Learning new <span className="like">words</span> 
          <br />
          has never been
          <br />
          this <span className="like">easy</span>
        </h1>
        .Vocab is an online word database with the aim of making learning new vocabulary easier for students, professionals, and language enthusiasts alike.
        <p className="flex items-center gap-3 text-lg justify-self-end">Made with <MdFavorite className="text-red"/> by <Link href='https://manas.is-a.dev' className="like font-bold hover:opacity-100 opacity-75">Manas140</Link></p>
      </div>
      <img className="h-[60vh] rounded-md hidden lg:block" src="/sigmund-SQkDTnerAGk-unsplash.jpg" alt="" />
    </main>
  )
}