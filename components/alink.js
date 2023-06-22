"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function ActiveLink({name, href}) {

  const pathname = usePathname()

  return (
    <Link className={`transition-all font-bold hover:text-white ${(pathname == href)? ('text-white') : ('text-gray-light') }`}  href={href}>{name}</Link>
  );
};
