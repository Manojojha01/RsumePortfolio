import React from 'react'

const Header = () => {
  return (
    <nav className=' bg-black text-white px-8 md:px-16 lg:px-24 '>
      <div className="container h-20 flex  md:justify-between justify-center items-center ">
        <div className="text-2xl font-bold hidden md:inline">Mr Manoj ojha</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#service" className="hover:text-gray-400">services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>    
          <a href="#contact" className="hover:text-gray-400">Contact</a>     
        </div>
        <a href='#contact' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform px-4 rounded-full duration-300 hover:scale-105 py-2' id='#contact'>
          Contact me</a>
      </div>
    </nav>
  )
}

export default Header
