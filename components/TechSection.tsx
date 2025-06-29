"use client"

import React from 'react'
import { HoverEffect } from './ui/card_hover_card'


const items1=[
    {
        title:"Python",
        icon: <img src="/python_18894.png" className='w-10 h-10' alt="python image"/>
    },
    {
        title:"Flutter",
        icon: <img src="/file_type_flutter_icon_130599.svg" className='w-10 h-10'/>
    },
    {
        title:"JavaScript",
        icon: <img src="/javascript.jpg" className='w-10 h-10'/>
    },
    {
        title:"React && React Native",
        icon: <img src="/react.png" className='w-10 h-10'/>
    },
    {
        title:"Next js",
        icon: <img src="/next.svg" className='w-10 h-10 bg-white px-2'/>
    },
    {
        title:"Devops",
        icon: <img src="/devops.svg" className='w-10 h-10'/>
    }
    ,
    {
        title:"Django && Django Restframework",
        icon: <img src="/django.png" className='w-10 h-10'/>
    },
    {
        title:"Version Control",
        icon: <img src="/git_plain_logo_icon_146507.svg" className='w-10 h-10'/>
    },

]

const TechSection = () => {
  return (
    
    <section id="skills" className='p-4 mx-auto lg:max-w-7xl md:max-w-4xl flex  flex-col  justify-center my-30'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4'>
          <div className='flex flex-col justify-between'>
            
            <div className='space-y-5'>
            <p className='uppercase text-sm'>My Tech Skills</p>
            <h1 className='text-4xl font-bold'>Explore <span className='text-gradient-to-r from-blue-600 to-blue-50'>premium </span>
            software solutions and cutting-edge technologies from a skilled Kenyan developer.</h1>
            <p className='text-sm leading-loose'>My skills represent the pinnacle of quality, crafted from the most powerful programming languages and technologies worldwide..</p>
            </div>
            <div className='bg-[#03a9f4] mt-2 text-center py-2 rounded-md'>
                <p className='font-medium'>Expore skills  </p>
            </div>
        </div>
        <div className='border rounded-2xl p-2 border-gray-600'>
            <HoverEffect items={items1} />
        </div>
      </div>
    </section>
  )
}

export default TechSection