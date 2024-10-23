'use client'

import { monoton } from '@/app/layout'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Icons
import { FaRegMoon } from 'react-icons/fa'

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const { i18n } = useTranslation()

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const handleChangeTheme = () => {
    document.querySelector('html')?.classList.toggle('dark')
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[80px] transition-all z-50 ${
        scrollNav ? 'bg-white shadow-md text-gray-800' : ''
      }`}
    >
      <nav className='container mx-auto flex items-center justify-between h-full'>
        {/* Logo */}
        <div>
          <h1 className={`${monoton.className} text-2xl lg:text-4xl`}>
            Buenodev
          </h1>
        </div>

        {/* NavItems */}
        {scrollNav ? (
          <ul className='hidden lg:flex gap-5'>
            <li>Knowledge</li>
            <li>Skill</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        ) : (
          ''
        )}

        {/* More */}
        <div className='flex gap-6 items-center'>
          <select
            className='!bg-none bg-transparent uppercase'
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value='en'>en</option>
            <option value='es'>es</option>
          </select>
          <div className='text-xl cursor-pointer' onClick={handleChangeTheme}>
            <FaRegMoon />
          </div>
          <button className='hidden lg:block'>Contactame</button>
        </div>
      </nav>
    </div>
  )
}

export default Header
