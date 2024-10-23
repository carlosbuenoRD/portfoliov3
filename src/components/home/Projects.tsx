import React from 'react'

const ProjectCard = () => (
  <div className='rounded-md overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
    <div>
      <img
        src='https://carlosbueno-portfolio-76fe5.web.app/images/project/grooma.png'
        alt=''
      />
    </div>
    <div className='p-3 text-lg'>
      <p>project name</p>
    </div>
  </div>
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default Projects
