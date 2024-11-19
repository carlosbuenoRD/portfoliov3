import { projects } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

const getFeatureColor = (feature: string) => {
  if (feature === 'Template') return 'bg-yellow-500'
  if (feature === 'Nextjs') return 'bg-gray-400'
  if (feature === 'React') return 'bg-blue-500'
  if (feature === 'Nodejs') return 'bg-green-500'
  if (feature === 'Nestjs') return 'bg-red-500'
  if (feature === 'Freelance') return 'bg-indigo-500'
}

const ProjectCard = (props: any) => (
  <Link
    target='_blank'
    href={props?.link}
    className='rounded-md overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'
  >
    <div>
      <img src={props.image} alt='' />
    </div>
    <div className='flex items-center justify-between p-3 text-lg'>
      <p>{props.title}</p>
      <div className='flex gap-2'>
        {props.features.map((f: string) => (
          <p
            className={`p-1 text-white text-sm rounded-md ${getFeatureColor(
              f
            )}`}
          >
            {f}
          </p>
        ))}
      </div>
    </div>
  </Link>
)

const Projects = () => {
  return (
    <section className='bg-white dark:bg-black container mx-auto mb-20'>
      <h2 className='text-4xl lg:text-[50px] text-center'>Projects</h2>

      <div className='grid grid-cols-2 gap-6 lg:grid-cols-4 mt-8 mb-16'>
        <div className='lg:w-[260px] bg-white rounded-2xl p-5 cursor-pointer grid place-items-center transition-all hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <img
            src='https://carlosbueno-portfolio-76fe5.web.app/images/react.png'
            alt=''
          />
        </div>
        <div className='lg:w-[260px] bg-white rounded-2xl cursor-pointer p-8 grid place-items-center transition-all hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <img
            src='https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png'
            alt=''
          />
        </div>
        <div className='lg:w-[260px] bg-white rounded-2xl p-5 cursor-pointer grid place-items-center transition-all hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <img
            src='https://carlosbueno-portfolio-76fe5.web.app/images/nodejs.png'
            alt=''
          />
        </div>
        <div className='lg:w-[260px] bg-white rounded-2xl cursor-pointer p-5 grid place-items-center transition-all hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <img
            src='https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png'
            alt=''
          />
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-8'>
        {projects.map((p) => (
          <ProjectCard {...p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
