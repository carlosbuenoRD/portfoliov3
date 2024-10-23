'use client'

import { kanit_bold } from '@/app/layout'
import { Carousel } from 'primereact/carousel'

const Experience = () => {
  const products = [
    {
      name: 'Freelancer',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYuQDYMTnXKRqTA2bEur_8NWBCyjdGyhfpg&s',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quas exercitationem, libero enim distinctio doloribus nesciunt velit quod illo porro rerum aliquam corrupti fugit facilis eveniet quibusdam, sint in dicta.',
    },
    {
      name: 'Las empanadas',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSFvExMCIAHTGpOF8FyOWmF4BiWI11iaUOw&s',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quas exercitationem, libero enim distinctio doloribus nesciunt velit quod illo porro rerum aliquam corrupti fugit facilis eveniet quibusdam, sint in dicta.',
    },
    {
      name: 'Mepyd',
      img: 'data:image/png;base64,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',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quas exercitationem, libero enim distinctio doloribus nesciunt velit quod illo porro rerum aliquam corrupti fugit facilis eveniet quibusdam, sint in dicta.',
    },
  ]
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const productTemplate = (product: any) => {
    return (
      <div className='bovwrder-1 surface-border border-round m-2 text-center flex flex-col lg:flex-row lg:items-center py-5 px-3 gap-10'>
        <div className='mb-3'>
          <img
            src={product.img}
            alt={product.name}
            className='shadow-2 m-auto lg:w-[800px]'
          />
        </div>
        <div>
          <h4 className={`${kanit_bold.className} text-2xl mb-4`}>
            {product.name}
          </h4>
          <p className='text-justify'>{product.description}</p>
        </div>
      </div>
    )
  }

  return (
    <section className='relative h-[100vh] bg-dark overflow-hidden'>
      <h2 className='text-4xl lg:text-[50px] text-center text-black dark:text-slate-200 z-10 absolute top-16 lg:top-0 w-full'>
        Experience
      </h2>
      <div className='absolute w-[200vw] lg:w-[100vw] h-[500px] -top-[200px] left-1/2 bg-white dark:bg-black -translate-x-1/2 translate-y-[-30%] rounded-[50%]' />
      <div className='absolute w-[100vw] h-[500px] -bottom-[70%] left-1/2 bg-white dark:bg-black -translate-x-1/2 translate-y-[-30%] rounded-[50%]' />
      <div className='card grid place-items-center pt-20 lg:pt-0 h-full lg:w-[60vw] m-auto'>
        <Carousel
          value={products}
          numVisible={1}
          circular
          numScroll={1}
          autoplayInterval={8000}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          className='w-[100vw] lg:w-fit'
        />
      </div>
    </section>
  )
}

export default Experience
