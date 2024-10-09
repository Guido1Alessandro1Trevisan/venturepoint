'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import cornellLogo from "@/public/institutions/cornell.png"
import harvardLogo from "@/public/institutions/harvard.png"
import imsaLogo from "@/public/institutions/imsa.png"
import uchicagolawLogo from "@/public/institutions/uchicago-law.png"
import uchicagolangaugeLogo from "@/public/institutions/uchicago-language.png"
import uchicagofontLogo from "@/public/institutions/uchicagofont.svg"
import ucl from "@/public/institutions/ucl.png"


type Logo = {
  src: any
  alt: string
}

const sampleLogos: Logo[] = [
  { src: cornellLogo, alt: "Cornell University" },
  { src: uchicagolawLogo, alt: "University of Chicago Language Center" },
  { src: harvardLogo, alt: "Harvard University" },
  { src: ucl, alt: "Cornell University" },
  { src: uchicagofontLogo, alt: "University of Chicago" },
  { src: imsaLogo, alt: "Illinois Mathematics and Science Academy" },
  { src: uchicagolangaugeLogo, alt: "University of Chicago Law School" },
]

export default function ScrollingLogos({ logos = sampleLogos }: { logos?: Logo[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerContent = scrollerRef.current
    const scrollerContentWidth = scrollerContent.scrollWidth
    let scrollAmount
    if (window.innerWidth <= 768) {
      scrollAmount = 1.5
    } else {
      scrollAmount = 0.5
    }
   

    let position = 0
    const scroll = () => {
      position -= scrollAmount
      if (position <= -scrollerContentWidth / 2) {
        position = 0
      }
      scrollerContent.style.transform = `translateX(${position}px)`
      requestAnimationFrame(scroll)
    }

    setStart(true)
    requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(requestAnimationFrame(scroll))
  }, [])

  return (
    <div className="w-full overflow-hidden bg-muted py-6 mt-10">
      <div 
        ref={scrollerRef}
        className={`flex ${start ? '' : 'invisible'}`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-8 shrink-0">
            <Image src={logo.src} alt={logo.alt} width={160} height={60} className="max-w-none" />
          </div>
        ))}
      </div>
    </div>
  )
}