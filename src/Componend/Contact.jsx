import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { toast } from 'react-toastify';




const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", '6aa44e5d-f8e8-42bf-a943-aed4e1dc4072');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className='bg-black text-white py-20 ' id='contact'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">

                   <div className='flex-1'> 
                 <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r
                 from-green-400 to-blue-500 mb-4">Let's Talk</h3>
                 <p>I'm open to discussing web devlopment projects or partnership opportunuties.</p>
                  <div className="mb-4 mt-8">
                  <MdMessage  className="inline-block text-gray-400 mr-2">  </MdMessage> 
                   <a href="mailto:youremail@example.com" className='hover:underline'>
                    youremail@example.com
                   </a>
                  </div>
                  <div className="mb-4 mt-8">
                 <FaPhoneVolume className="inline-block text-gray-400 mr-2"> </FaPhoneVolume>
                   <span>91+ 8408349073</span>
                  </div>
                  <div className="mb-4 mt-8">
                  <FaSearchLocation className="inline-block text-gray-400 mr-2" > </FaSearchLocation> 
                   <span>sreet, city, pronice, country</span>
                  </div>
                    </div>
                    <div className="flex-1 w-full">
                      <form onSubmit={onSubmit}  method="POST"  className='space-y-4'>
                        <div className="">
                            <label htmlFor="name">Your name</label>
                            <input type="text" required  name='name'
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                            focus:border-green-400' placeholder='Enter you name' />
                        </div>
                        <div className="">
                            <label htmlFor="email"  required>Email</label>
                            <input type="email" name='email' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                            focus:border-green-400' placeholder='Enter you email' />
                        </div>
                        <div className="">
                            <label htmlFor="message"  required>Message</label>
                            <textarea  name='message' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                            focus:border-green-400' placeholder='Enter you message ' rows="5"/>
                        </div>
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform px-12 rounded-full duration-300 hover:scale-105 py-2 '
                        >    {result ? result :"Send Message"}</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
