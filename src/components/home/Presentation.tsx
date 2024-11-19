'use client'

import React from 'react'
import { kanit_bold } from '@/app/layout'

// Icons
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const Presentation = () => {
  const { t } = useTranslation()

  return (
    <section id='presentation' className='relative overflow-hidden bg-dark'>
      <div className='container mx-auto grid place-items-center h-[100vh] pt-6 md:pt-12'>
        <div className='rounded-full lg:rounded-none w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] absolute bottom-[-200px] left-[-100px] bg-gray-900 dark:bg-white rotate-[150deg] z-20' />
        <div className='rounded-full lg:rounded-none w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] absolute bottom-[-200px] right-[-100px] bg-gray-900 dark:bg-white rotate-[30deg]' />
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
          {/* INFORMATION */}
          <div className='lg:w-1/2'>
            <h1 className='text-4xl text-center lg:text-start lg:text-6xl font-bold mb-4'>
              <span className={`${kanit_bold.className}`}>{t('welcome')}</span>{' '}
              Carlos Bueno
            </h1>
            <p className='text-xl text-center lg:text-justify leading-7'>
              {t('welcome_p')}
            </p>
            <div className='flex items-center mt-6'>
              <div className=' bg-gray-900 text-white m-auto lg:m-0 w-[200px] uppercase p-3'>
                <p>FullStack Developer</p>
              </div>
            </div>
            <div className='flex w-fit gap-6 !mt-6 m-auto lg:m-0 text-3xl'>
              <Link target='_blank' href={'https://github.com/carlosbuenoRD'}>
                <FaGithubSquare />
              </Link>
              <Link
                target='_blank'
                href={'https://www.linkedin.com/in/carlos-bueno-b77bb3191/'}
              >
                <FaLinkedin />
              </Link>
              <Link
                target='_blank'
                href={'https://www.instagram.com/bloodysi/'}
              >
                <FaInstagramSquare />
              </Link>
            </div>
          </div>
          {/* img */}
          <div>
            <img
              src='/personal.jpeg'
              className='rounded-t-3xl mb-3 lg:mb-0 w-[300px] lg:w-[400px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
