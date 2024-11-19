'use client'

import '@/utils/i18'
// Components
import Presentation from '@/components/home/Presentation'
import Knowledge from '@/components/home/Knowledge'
import Skills from '@/components/home/Skills'
import Projects from '@/components/home/Projects'
import Experience from '@/components/home/Experience'
import ContactUs from '@/components/home/ContactUs'

export default function Home() {
  return (
    <div>
      <Presentation />
      <Knowledge />
      <Skills />
      <Experience />
      <Projects />
      <ContactUs />
    </div>
  )
}
