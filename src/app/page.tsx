'use client'

// Components
import Presentation from '@/components/home/Presentation'
import Knowledge from '@/components/home/Knowledge'
import Skills from '@/components/home/Skills'
import Projects from '@/components/home/Projects'
import Experience from '@/components/home/Experience'
import '@/utils/i18'

export default function Home() {
  return (
    <div>
      <Presentation />
      <Knowledge />
      <Skills />
      <Experience />
      <Projects />
    </div>
  )
}
