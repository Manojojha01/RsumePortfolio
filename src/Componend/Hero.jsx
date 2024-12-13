import React from 'react'
import hero_img from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className=' bg-black text-white text-center py-16'>
      <img className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform
      duration-300 hover:scale-105'
       src={hero_img} alt="" />
      <h1 className='text-4xl font-bold'>I'm {""}
   <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Manoj Ojha ,</span>
          Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 px-4 md:px-32'>I specialize in building morder and responsive web applictions</p>
      <div className="mt-8 space-x-4">
        <a href='#contact' className=' bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
           Contact with me</a>
        <button className=' bg-gradient-to-r from-yellow-400 to-pink-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
