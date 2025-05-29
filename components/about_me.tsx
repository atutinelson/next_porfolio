import React from 'react'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets:['latin'],
  weight:"400",
  
})

const AboutMe = () => {
  return (
    <section id="about" className='p-4 mx-auto lg:max-w-7xl md:max-w-4xl flex  flex-col  justify-center'>
      <h1 className='text-2xl'>About Me</h1>
        <p className={`leading-loose mt-10 mb-10`}>
            I'm a passionate and detail-oriented software developer with a strong focus on building scalable, 
            user-friendly applications. I enjoy solving complex problems and turning ideas into efficient,
             practical solutions using modern technologies.
With experience in both frontend and backend development, I specialize in creating full-stack web and mobile
 applications that deliver seamless user experiences. My toolkit includes technologies such as
 <span className='font-bold mx-2 text-[#03a9f4] '>[ JavaScript, React, Flutter, Django, Node.js, Firebase, Tailwind css,Python, Next js ]</span> 
, and I'm constantly learning and experimenting with new tools to stay ahead in this fast-paced industry.
Whether working independently or collaborating with cross-functional teams, I take pride in writing clean,
 maintainable code and delivering projects that add real value. I'm always excited to take on new challenges, 
 contribute to innovative products, and grow as a developer.</p>
    </section>
  )
}

export default AboutMe