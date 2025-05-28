"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import NavBarMenuItem from './NavBarMenuItem'
import { AiOutlineMenu } from 'react-icons/ai'

const navtabs =[
     {name:"Home", path:"/"},
     {name:"Services", path:"/services"},
     {name:"Blog", path:"/blog"},
     {name:"Projects", path:"/projects"},
     {name:"Skills", path:"/skills"},
]

const Navbar = () => {
    const[selected, setSelected] = React.useState(0);
  return (
    <div className='bg-white/30 fixed z-10 left-0 right-0 mt-4 w-fit mx-auto rounded-sm backdrop-blur-md shadow-lg'>
       <div className='space-x-10 py-3 px-4 flex'>
        
          {
            navtabs.map((item,index)=>(
                 <div key={index}>
                    <p>{item.name}</p>
                 </div>
             ))
          }
       </div>
       
    </div>
  )
}

export default Navbar
