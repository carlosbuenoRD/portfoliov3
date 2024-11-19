'use client'

import { monoton } from '@/app/layout'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Icons
import { FaRegMoon } from 'react-icons/fa'
import ScrollWithOffsetLink from '../ScrollWithOffsetLink'
import Link from 'next/link'

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
          <ScrollWithOffsetLink
            href={'#presentation'}
            offset={0}
            className={`${monoton.className} text-2xl lg:text-4xl`}
          >
            Buenodev
          </ScrollWithOffsetLink>
        </div>

        {/* NavItems */}
        {scrollNav ? (
          <ul className='hidden lg:flex gap-5'>
            <ScrollWithOffsetLink href='#knowledge' offset={100}>
              Knowledge
            </ScrollWithOffsetLink>
            <ScrollWithOffsetLink href='#skill' offset={100}>
              Skill
            </ScrollWithOffsetLink>
            <ScrollWithOffsetLink href='#experience' offset={100}>
              Experience
            </ScrollWithOffsetLink>
            <ScrollWithOffsetLink href='#projects' offset={100}>
              Projects
            </ScrollWithOffsetLink>
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
          <ScrollWithOffsetLink
            href='#contact'
            offset={100}
            className='hidden lg:block'
          >
            Contactame
          </ScrollWithOffsetLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
