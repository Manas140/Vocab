import 'server-only'
import Search from '@/components/search';
import Link from 'next/link';
import { FaHeart, FaCircleInfo, FaHouse, FaMagnifyingGlass } from 'react-icons/fa6';

export default function Layout({ children }) {
  return (<main className='h-full grid'>
    <section className="font-light lg:text-lg grid gap-10 content-start lg:px-[10vw] xl:px-[15vw] p-5 pb-40 pt-10">
      <div className='lg:grid gap-5 hidden'>
        <nav className="flex justify-around gap-10 pt-10">
          <Link href='/' className="text-xl font-normal self-center">.Vocab</Link>
          <div className='gap-5 flex'>
            <Search></Search>
            <Link href='/saves' className="bg-al p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaHeart /> Saves</Link>
            <Link href='/about' className="bg-al p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaCircleInfo /> About</Link>
          </div>
        </nav>
      </div>

      {children}

    </section>
    <nav className='flex lg:hidden bg-al p-5 fixed w-full rounded-none bottom-0 border-t-2 border-bg2'>
      <div className='sm:flex justify-evenly w-full hidden gap-5 h-14'>
        <Link href='/' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaHouse /> Home</Link>
        <Link href='/search' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaMagnifyingGlass /> Search</Link>
        <Link href='/saves' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaHeart /> Saves</Link>
        <Link href='/about' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaCircleInfo /> About</Link>
      </div>
      <div className='flex justify-evenly w-full sm:hidden h-14'>
        <Link href='/' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaHouse /></Link>
        <Link href='/search' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaMagnifyingGlass /></Link>
        <Link href='/saves' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaHeart /></Link>
        <Link href='/about' className="bg-bg2 p-2 rounded-full px-7 hover:bg-hw transition-colors text-base flex gap-5 items-center"><FaCircleInfo /></Link>
      </div>
    </nav>

  </main>)
}
