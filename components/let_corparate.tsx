import React from 'react'

const Corporate = () => {
  return (
    <section className='p-4 mx-auto lg:max-w-7xl md:max-w-4xl flex  flex-col  justify-center my-30'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4'>
            <div>
                <h1 className='text-2xl font-bold mb-3'>Let&apos;s Build Together</h1>
        <p className='text-sm leading-loose'>I&apos;m always open to collaborating with passionate developers on exciting projects!
Whether it&apos;s web apps, mobile apps, or anything innovative, let&apos;s bring ideas to life together.
Fill out the form below or connect with me directly — let&apos;s create something awesome.</p>
            </div>
             <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 rounded border text-sm border-gray-600" required />
      <input type="email" placeholder="Your Email" className="w-full p-3 rounded border text-sm border-gray-600" required />
      <input type="url" placeholder="Your GitHub or Portfolio Link" className="w-full p-3 rounded border text-sm border-gray-600" />
      <textarea placeholder="Tell me about your idea..." className="w-full p-3 rounded border h-32 text-sm border-gray-600" required></textarea>
      <button className="bg-[#03a9f4] w-full text-white py-2 px-6 rounded hover:bg-blue-700 transition">Send Request</button>
    </form>
        </div>
    </section>
  )
}

export default Corporate;