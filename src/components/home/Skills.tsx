import { kanit_bold } from '@/app/layout'
import React from 'react'

const Skills = () => {
  return (
    <section className='relative bg-white dark:bg-black h-[100vh] text-black dark:text-slate-200 z-20'>
      <h2 className='lg:absolute left-0 right-0 top-[40px] text-4xl lg:text-[50px] text-center mb-3 lg:mb-0'>
        Skills
      </h2>
      <div className='flex flex-col lg:flex-row justify-between items-center h-full'>
        <div className='flex flex-col lg:items-center w-full lg:w-[25vw] h-full lg:rounded-br-full bg-[rgba(0,144,182,1)] '>
          <h3
            className={`flex flex-wrap text-2xl px-2 lg:text-4xl ${kanit_bold.className} my-6 lg:my-8`}
          >
            Frontend
          </h3>
          <ul className='flex lg:block flex-wrap gap-3 rounded-[15px] w-full lg:h-[30vh] px-2 lg:px-0'>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              React Hooks
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Context Api
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Redux
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              React Router
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Next.js
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Style Components
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Material-ui
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Bootstrap
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Sass
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Fetch Data
            </li>
          </ul>
        </div>
        <div className='lg:w-[500px]'>
          <img
            src='https://carlosbueno-portfolio-76fe5.web.app/images/mern.png'
            alt='mern'
            className='w-full pointer-events-none'
          />
        </div>
        <div className='flex flex-col lg:items-center w-full lg:w-[25vw] h-full lg:rounded-bl-full lg:rounded-tl-[300px]  bg-[rgb(23,140,0)]'>
          <h3
            className={`text-2xl lg:text-4xl ${kanit_bold.className} px-2 my-8`}
          >
            Backend
          </h3>
          <ul className='flex lg:block flex-wrap gap-3 rounded-[15px] w-full lg:h-[30vh] text-end'>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Express
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Mongodb
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Mysql
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              JSON Web Tokens
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Passport
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Multer
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Websocket
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              GraphQL
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              Microservices
            </li>
            <li className='mb-3 lg:mb-7 px-3 bg-white dark:bg-black lg:w-full'>
              DocSwagger
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
