'use client'

import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils' // Optional: your class merging util

const navtabs = [
  { name: "Home", path: "#" },
  { name: "Services", path: "#services" },
  { name: "Blog", path: "#blog" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className='bg-white/30 text-white fixed z-10 left-0 right-0 mt-4 mx-auto rounded-sm backdrop-blur-md shadow-lg px-4 w-[90%] sm:max-w-fit'>
      {/* Desktop Menu */}
      <div className='hidden sm:flex space-x-10 py-3'>
        {navtabs.map((item, index) => (
          <Link href={item.path} key={index}>
            <p
              className={cn(
                'cursor-pointer',
                pathname === item.path ? 'text-blue-500 font-semibold' : 'text-white'
              )}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className='sm:hidden py-3 flex items-center justify-between'>
         <p className='font-bold text-[#03a9f4]'>NELSON NYABUTI</p>
        <button onClick={toggleMenu}>
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='sm:hidden bg-white/10 backdrop-blur-md rounded-sm border border-[#03a9f4] absolute top-14 left-0 w-full  shadow-md rounded-b-md z-20'>
          <div className='flex flex-col p-4 space-y-3 '>
            {navtabs.map((item, index) => (
              <Link href={item.path} key={index}>
                <p
                  className={cn(
                    'cursor-pointer',
                    pathname === item.path ? 'text-blue-500 font-semibold' : 'text-white'
                  )}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
