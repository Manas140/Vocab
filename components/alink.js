"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function ActiveLink({href, children}) {

  const pathname = usePathname()

  return (
    <Link className={`transition-all flex font-semibold hover:text-white ${(pathname == href)? ('text-white') : ('text-gray-light') }`}  href={href}>{children}</Link>
  );
};
