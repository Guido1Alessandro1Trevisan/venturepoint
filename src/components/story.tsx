import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import linkedinlogo from "@/public/linkedinlogo.png";
import Image from "next/image";

export default function AboutDropdown() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleGuidoLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/guido-trevisan-342b43259";
  };

  const handleConradLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/conrad-wichmann-396a0231a/";
  };

  if (!isMounted) {
    // Return null or a simple loading state to prevent mismatches between SSR and CSR
    return null;
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="guido">
        <AccordionTrigger className="text-2xl font-serif">
          <div className="flex items-center w-full relative">
         
            <button onClick={handleGuidoLinkedin} className="absolute ml-52">
              <Image
                alt={`Guido Linkedin`}
                className="object-contain"
                src={linkedinlogo}
                width={30}
              />
            </button>
            ABOUT GUIDO
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            ></a>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-lg text-gray-600 font-roboto">
            Guido is a Mathematics major at the University of Chicago with a broad
            academic background that includes PhD-level machine learning coursework
            and MBA classes at the Booth School of Business.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="conrad">
        <AccordionTrigger className="text-2xl font-serif">
          <div className="flex items-center justify-between w-full relative">
            ABOUT CONRAD
            <button onClick={handleConradLinkedin} className="absolute ml-52">
              <Image
                alt={`Conrad Linkedin`}
                className="object-contain"
                src={linkedinlogo}
                width={30}
              />
            </button>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            ></a>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-lg text-gray-600 font-roboto">
            Conrad is a a dual Physics and Mathematics major at the University of Chicago conducting research on superconducting quantum processors at Fermilab&apos;s SQMS.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
