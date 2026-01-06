import React from 'react'

const HeroSection = () => {
  
  return (
    <section className='bg-white py-16 '>
    <div className=' max-h-screen shadow-md   rounded-xl   max-h-full mx-auto mt-4'>
        <div className='flex flex-col items-center justify-center text  gap-6' >
         <div>
           <h1 className='text-center font-bold text-2xl'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
         </div>
         <div>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
         </div>
        </div>
    </div>
    </section>
  )
}

export default HeroSection