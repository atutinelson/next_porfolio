
import React from 'react'
import { FaCode } from 'react-icons/fa'
import CardItem from './CardItem'

const services =[
    {
        title:"Website Development",
        description:"I craft custom Web Design and Development solutions tailored to your vision and goals. As a passionate and skilled software developer based in Kenya, I’m dedicated to building modern, scalable, and impactful digital experiences.",
        icon: <FaCode/>
        
    },
    
    {
        title:"Mobile App Development",
        description:"I specialize in building intuitive, high-performance mobile applications tailored to meet unique user needs. Whether it's Android, iOS, or cross-platform solutions, I turn ideas into smooth, reliable, and scalable mobile experiences that drive results.",
        icon: <FaCode/>
    },
    {
        title:"Ecommerce",
        description:"I build powerful and user-friendly mobile e-commerce apps designed to boost sales and enhance customer engagement. From seamless product browsing to secure checkout and real-time order tracking, I create shopping experiences that convert and retain users.",
        icon: <FaCode/>
    },
    {
        title:"Graphics design",
        description:"With a keen eye for detail and a deep understanding of visual storytelling, I design graphics that elevate your brand identity and drive engagement. Whether you're building a startup, promoting a campaign, or refreshing your look, I deliver clean, modern, and purposeful design solutions.",
        icon: <FaCode/>
    },
]

const Services = () => {
  return (
    <section id="services" className='mt-20'>
        <div className='w-fit mx-auto flex flex-col items-center'>
            <h1 className=' md:text-2xl animate-pulse '>SOFTWARE DEVELOPMENT IN KENYA</h1>
            <p className='text-sm capitalize mt-4 text-gray-400'>what i do</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 gap-8 container mx-auto'>
        {services.map((service, index)=>(
            <div key={index}>
                <CardItem title={service.title} description={service.description} icon={service.icon}/>
            </div>
        ))}
    </div>
    </section>
  )
}

export default Services