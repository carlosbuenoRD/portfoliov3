import { kanit_bold } from '@/app/layout'
import React from 'react'

const Knowledge = () => {
  return (
    <div id='knowledge' className='relative h-[100vh] overflow-hidden bg-dark'>
      <h2 className='absolute left-0 right-0 top-[40px] text-4xl lg:text-[50px] text-center'>
        Knowledge
      </h2>
      <div className='w-[200px] rounded-full lg:rounded-none lg:w-[300px] h-[200px] lg:h-[300px] absolute top-[-160px] lg:top-[-100px] left-[-55px] bg-white dark:bg-black rotate-[150deg] z-20' />
      <div className='w-[200px] rounded-full lg:rounded-none lg:w-[300px] h-[200px] lg:h-[300px] absolute top-[-160px] lg:top-[-100px] right-[-55px] bg-white dark:bg-black rotate-[30deg]' />
      <div className='absolute w-[500px] lg:w-[55vw] h-[300px] lg:h-[500px] top-full left-1/2 bg-white dark:bg-black -translate-x-1/2 translate-y-[-30%] rounded-[50%]' />
      <section className='container mx-auto flex flex-col lg:flex-row justify-center gap-8 lg:justify-between items-center text-center h-full'>
        <div className=' max-w-[500px]'>
          <h3 className={`text-2xl lg:text-4xl mb-6 ${kanit_bold.className}`}>
            Frontend
          </h3>
          <p className='lg:text-2xl leading-7'>
            Nice-looking, responsive, and completely functional web
            applications, handle and send data to the server, good managment
            with HTML, CSS, and javascript, implement and learn complex frontend
            functionalities.
          </p>
        </div>

        <div className=' max-w-[500px]'>
          <h3 className={`text-2xl lg:text-4xl mb-6 ${kanit_bold.className}`}>
            Backend
          </h3>
          <p className='lg:text-2xl leading-7'>
            Completely restful API service, handle data and files from the
            client, handle user authentication, payment implementation such as
            PayPal and stripe while working with microservices and server-side
            applications.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Knowledge