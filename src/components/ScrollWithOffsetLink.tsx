import { useRouter } from 'next/navigation'

// Hook personalizado para hacer scroll con offset
const scrollToElementWithOffset = (elementId: string, offset: number) => {
  const element = document.getElementById(elementId)
  if (element) {
    const yOffset = -offset
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const ScrollWithOffsetLink = ({ href, offset, children, ...props }: any) => {
  const handleClick = async (e: any) => {
    e.preventDefault() // Prevenimos el comportamiento por defecto del enlace
    const [path, elementId] = href.split('#') // Separamos la ruta del ID

    scrollToElementWithOffset(elementId, offset)
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default ScrollWithOffsetLink
