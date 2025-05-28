import React from 'react'
import {FaGithub, FaTiktok, FaWhatsapp} from "react-icons/fa"
import {AiFillMail, AiOutlineArrowRight} from "react-icons/ai"
import { TooltipDemo } from './toolTip'

const Footer = () => {
    const navtabs =[
     {name:"Home", path:"/"},
     {name:"Services", path:"/services"},
     {name:"Blog", path:"/blog"},
     {name:"Projects", path:"/projects"},
     {name:"Skills", path:"/skills"},
]
  return (
    <div className='my-15 w-[98%] mx-auto '>
    
        <div className='h-[0.3] w-full bg-gradient-to-r from-transparent via-white to-transparent'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-5 mt-7 gap-8'>
            <div className='flex flex-col gap-3'>
                <h1 className='font-semibold text-sm md:text-xl uppercase'>Nelson Nyabuti</h1>
                <p className='text-xs text-gray-400'>Help you rebuild and redefine fundamental concepts through mental models.</p>
                <div className='flex gap-3'>
                   <TooltipDemo icon={<AiFillMail/>} text='email'/>
                   <TooltipDemo icon={<FaGithub/>} text='Github'/>
                   <TooltipDemo icon={<FaTiktok/>} text='Tiktok'/>
                   <TooltipDemo icon={<FaWhatsapp/>} text='Whatsapp'/>
                </div>
            </div>
            <div>
                <h1 className='text-sm text-gray-400 uppercase mb-4'>General</h1>
                <div className='flex flex-col gap-2'>
                    {
                        navtabs.map((nav,index)=>(
                            <a key={index} className='text-sm text-white'>{nav.name}</a>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-bold'>Subscribe to Nelson's blog newsletter</h1>
                <p className='text-sm text-gray-400'>Don't miss out 😉. Get an email whenever I post, no spam.</p>
                <div className='border flex w-fit px-2 items-center gap-4 py-2'>
                    <p className='text-gray-400'>Subscribe Now</p>
                    <div className='bg-white/50 p-1 rounded-sm'>
                       <AiOutlineArrowRight/>
                    </div>
                </div>
            </div>
        </div>

        <div className='h-[0.9] w-full bg-gradient-to-r from-transparent via-white to-transparent my-10'></div>
        <div className='text-center mx-4'>
            <p className='text-xs md:text-sm text-gray-400'>Copyright © 2025 Nelson Nyabuti. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer