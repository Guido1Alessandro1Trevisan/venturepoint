'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import linkedinlogo from '@/public/linkedinlogo.png'
import Image from "next/image"

export function AboutDropdownComponent() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="guido">
        <AccordionTrigger className="text-2xl font-serif">
          <span className="flex items-center justify-between w-full">
            ABOUT GUIDO
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
                <Image
                  alt="linkedin"
                  src={linkedinlogo}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                /> 
            </a>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-lg text-gray-600 font-roboto">
            Guido, a Mathematics major at the University of Chicago,
            has a broad academic background that includes PhD-level
            machine learning coursework and MBA classes at the Booth
            School of Business.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="conrad">
        <AccordionTrigger className="text-2xl font-serif">
          <span className="flex items-center justify-between w-full">
            ABOUT CONRAD
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
            </a>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-lg text-gray-600 font-roboto">
            Conrad, a dual Physics and Mathematics major at the
            University of Chicago, is conducting research on
            superconducting quantum processors at Fermilab&apos;s SQMS
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}