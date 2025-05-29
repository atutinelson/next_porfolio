"use client"
import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight';
import { Montserrat, Bokor} from 'next/font/google';

import MagicButton from './ui/MagicButton';
import {FaArrowDown, FaDownload, FaReceipt, FaShare, FaTelegram, FaTiktok, FaTwitterSquare} from "react-icons/fa"
import { TooltipDemo } from './toolTip';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { CodeBlock } from './ui/code_block';
import { CodeBlocks } from './codeBlocks';
import { ThreeDMarquee } from './ui/3d_marquee';
import Bottomsheet from './sheet';

const montserrat = Montserrat({
  subsets:['latin'],
  weight:"400",
  
})


const Hero = () => {
   
  return (
    
     <section className='relative w-full  h-screen'>  
      <div className='absolute left-0 right-0 top-[40%] md:top-0 bottom-0 p-4 mx-auto lg:max-w-7xl md:max-w-4xl flex items-center justify-center'>
        <div className='flex flex-col lg:flex-row w-full h-screen justify-between items-center container mx-auto'>
         <div className='flex-1 justify-start'>
           <div className='bg-gradient-to-r from-[#0b100e]  to-[#0b120f] w-fit p-3 rounded-sm'>
              <div className='bg-gradient-to-r from-[#0e3123] to-[#0b100e] px-2 py-2 w-fit rounded-sm flex items-center gap-2'>
                 <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.628 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.951-.69l1.286-3.967z" />
                 </svg>
                 <p className='text-white text-xs font-semibold tracking-widest'>Let’s build something powerful—together</p> 
              </div>
           </div>
           <h1 className={`text-5xl mt-8 font-semibold capitalize brightness-100`}>I&apos;M NELSON NYABUTI</h1>
           <p className={`text-[#f5f8fc] mt-4 leading-loose text-sm`}>
            I'm a Kenyan-based Software Developer passionate about building robust web, mobile, and cloud-based applications that solve real-world problems.
           </p>
            <div className='mt-8 flex gap-8'>
                <a href='#about'><MagicButton  text="More About Me" icon={<FaArrowDown/>}/></a>
                <Bottomsheet trigger={<a><MagicButton text="Request Resume" icon={<FaTelegram/>}/></a>}/>
                
            </div>
            <div className='mt-10'>
                <div className='flex gap-3'>
                   <a href='https://www.tiktok.com/@dev_nelly' target="_blank"><TooltipDemo icon={<FaTiktok className='text-white/50'/>} text='Tiktok'/></a> 
                    <TooltipDemo icon={<BsTwitter className='text-white/50 cursor-crosshair'/>} text='Twitter'/>
                   <a href='https://wa.me/254791315487' target="_blank"><TooltipDemo icon={<BsWhatsapp className='text-white/50 cursor-crosshair'/>} text="What'sapp"/></a> 
                    <TooltipDemo icon={<BsFacebook className='text-white/50 cursor-crosshair'/>} text='Facebook'/>

                </div>
            </div>
        </div>
        <div className="flex-1 mt-10 md:mt-[40%] px-4">
            <div
               style={{
               transformStyle: "preserve-3d",
               transform: "rotateY(-20deg) rotateX(60deg)",
                perspective: "1000px",
              }}
            className="relative backdrop-blur-md bg-white/5 shadow-lg rounded-md overflow-hidden p-4 max-w-full"
           >
          <div className="overflow-x-auto">
            <CodeBlocks />
           
           </div>

           {/* Overlay Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-lg p-2 w-fit backdrop-blur-md bg-white/20 animate-bounce border border-gray-500 text-center">
            <p className="text-sm sm:text-base">Hello world</p>
         </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
  
}

export default Hero
