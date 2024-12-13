import React from 'react'

const Service = () => {
    const service =[
        {
            id:1,
            title:"Web Desing",
            description:"Creating visually appealing and user-friendliy web desing.",
        },
        {
            id:2,
            title:"Frontend devlopment",
            description :"Buliding responsive and interactive user interfaces.",
        },
        {
            id:3,
            title:"Backend Devlopment",
            description:"Devloping robust server-side logic and databasses.",
        },
        {
            id:4,
            title:"Full-Stack Devlopment",
            description:"Combining both fornted and backend devlopment skills.",
        },
        {
            id:5,
            title:"Content Writing",
            description:"writing content for your business and compnies.",
        },
        {
            id:6,
            title:"Digital Marketing",
            description:"Promote your business with our digital marketing team.",
        },
    ];
  return (
    <div className='bg-black text-white py-20 ' id='service'>
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
            <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-8">
             {service.map(service =>(
            <div key={service.id}
                className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform
                duration-300 hover:scale-105'   >
                    <div className="text-right text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r form-green-400 to-blue-600">
                     {service.id}
                </div>
                <h3 className='mt-2 text-2xl inline-block text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500'>
                    {service.title}
                    </h3>
                    <p className='mt-2 text-gray-400'>
                        {service.description}
                    </p>
                    <a href="#" className='mt-4 inline-block text-green-400 
                    hover:text-blue-500'>Read more</a>
            </div>
             ))}
            </div>
        </div>
    </div>
  )
}

export default Service
