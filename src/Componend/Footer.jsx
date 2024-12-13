import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 '>
 <div className="container mx-auto px-8 md:px-16 ld:px-24">
    <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
        <div className="flex-1 mb-4 md:mb-0 ">
        <h3 className='text-2xl font-bold mb-2'>Manoj</h3>
        <p className='text-gray-400'>Full-stack Developer bassed in the USa, specializing in web and softwaredevloper</p>
        </div>
        <div className="flex-1 w-full ">
            <form className='flex items-center justify-center' >
                <input
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600
                focus:outline-none focus:border-green-400'
                 type="email" placeholder='Enter email'/>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>subscribe</button>
            </form>
        </div>
    </div>
    <div className=" border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className='text-gray-400'>
            &copy;{2024}
        </p>
        <div className="flex p space-x-4 my-4 md:my-0 text-2xl">
        <a href="https://www.instagram.com/mannu____x001/profilecard/?igsh=bHltZWU1MjBteDRp" target='blank' className='text-gray-400 hover:text-orange-400'><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=100059743687182&mibextid=ZbWKwL"  target='blank' className='text-gray-400 hover:text-orange-400'><FaFacebook /></a>
        <a href="https://github.com/" className='text-gray-400 hover:text-orange-400'  target='blank'><FaGithub /></a>
        <a href="" className='text-gray-400 hover:text-orange-400'><FaLinkedin /></a>
        </div>
        <div className="flex space-x-4">
            <a href="" className='text-gray-400 hover:text-orange-400'>Privacy</a>
            <a href="" className='text-gray-400 hover:text-orange-400'>Terms of Service</a>
        </div>
    </div>
 </div>
    </footer>
  )
}

export default Footer
