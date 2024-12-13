"use client";

import ScrollingLogos from "./ui/scrolling-logos";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import rich from "@/public/rich.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import AboutDropdown from "./story";
import ParticlesComponent from "@/components/particles/particles";
import readablyLogo from "@/public/readablylogo.png";
import lynkrLogo from "@/public/lynkrlogo.png";
import caspermasterLogo from "@/public/caspermasterlogo.svg";
import uchicagogenie from "@/public/uchicagogenie.png";
import docusurferLogo from '@/public/docusurferlogo.png'
import prind from '@/public/prind.png'

const companies = [
  {
    name: "Readably",
    url: "https://readably.io/en",
    logo: readablyLogo,
    backgroundColor: "#262626",
  },
  {
    name: "Lynkr",
    url: "https://apps.apple.com/us/app/lynkr-app/id6463145067",
    logo: lynkrLogo,
    backgroundColor: "#f19dc2",
  },
  {
    name: "(P)rind",
    url: "https://www.eatprind.com",
    logo: prind,
    backgroundColor: "#ff9a00",
    border: "0px solid black",
  },
  {
    name: "UChicagogenie",
    url: "https://uchicagogenie.com/",
    logo: uchicagogenie,
    backgroundColor: "#800000",
  },
  {
    name: "Docusurfer",
    url: "",
    logo: docusurferLogo,
    backgroundColor: "#ffffff",
    border: "1px solid black",
  },
  {
    name: "Casper Master",
    url: "https://caspermaster.ai/",
    logo: caspermasterLogo,
    backgroundColor: "#fbfcfb",
    
  },
];

// Add this new component definition and export it
export const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 pr-6 sm:pr-8 whitespace-nowrap">
      {title}
    </h2>
    <div className="flex-grow h-px bg-gray-300"></div>
  </div>
);

const AnimatedSection = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};

const DownArrow = () => (
  <svg 
    className="mx-auto w-8 h-16 my-4" 
    viewBox="0 0 32 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 0 L16 60" stroke="#D1D5DB" strokeWidth="2"/>
    <path d="M6 50 L16 60 L26 50" stroke="#D1D5DB" strokeWidth="2"/>
  </svg>
);

export default function VenturePointLanding() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute("href")?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#333333]">
      <main className="flex-1">
        <section
          id="hero"
          className="w-full h-screen flex flex-col justify-center items-center relative bg-gray-100 overflow-hidden"
        >
          <div className="absolute top-0">
            <ParticlesComponent />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl mx-auto text-center">
              Empowering visionaries. Fueling innovation. Building the future.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto text-center font-normal">
              VenturePoint is a University of Chicago venture studio that
              enables non-technical undergraduates to scale their startups.
            </p>
          </div>
          <div className="absolute bottom-8 animate-bounce z-10">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </section>

        <div className="flex flex-col items-center justify-center z-10 ">
          <ScrollingLogos />
        </div>

        
        <AnimatedSection id="approach" className="w-full py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Our Approach" />
            <div className="flex flex-col items-center approach-cards">
              {[
                { 
                  "title": "Speed and Foundation", 
                  "description": "We work on innovative tech ideas and rapidly validate them through guerrilla marketing and in-depth vertical analytics to ensure a strong foundation for future growth." 
                },
                { 
                  "title": "Product Lead", 
                  "description": "We take a small equity stake  and collaborate with non-technical founders from prestigious universities like UChicago, Harvard, Cornell, and UCL where we take on the role of product lead." 
                },
                { 
                  "title": "Corporate Support", 
                  "description": "We  partner with experts from top institutions to gain valuable market insights and accelerate our growth trajectory." 
                }
              ].map((item, index, array) => (
                <div key={index} className="w-full max-w-2xl">
                  <div 
                    className="bg-gray-100 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mb-4 approach-card"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-serif text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-xl text-gray-600 font-roboto">{item.description}</p>
                  </div>
                  {index < array.length - 1 && <DownArrow />}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>


        <AnimatedSection id="portfolio" className="w-full pt-8 pb-8 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Featured Companies" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companies.map((company, index) => (
                <Link
                  key={index}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="aspect-square p-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                    style={{ 
                      backgroundColor: company.backgroundColor,
                      border: company.border || 'none'
                    }}
                  >
                    <div className="w-3/4 h-3/4 relative">
                      <Image
                        alt={`${company.name} logo`}
                        className="object-contain"
                        src={company.logo}
                        layout="fill"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href={"/portfolio"}>
                <button className="px-6 py-2 rounded-[4px] font-roboto bg-black text-white hover:bg-gray-800 transition-colors duration-300 shadow-sm flex items-center justify-center mx-auto">
                  Explore Our Portfolio
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="leaders" className="w-full py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Leadership" />
            <div className="flex flex-col lg:flex-row gap-12">
              <div
                className="w-full lg:w-1/2 relative"
                style={{ minHeight: "600px", height: "auto" }}
              >
                <Image
                  src={rich}
                  alt="Michael Loeb and Rich Vogel"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-serif mb-6">Wired this way.</h3>
                <p className="text-xl text-gray-600 font-roboto mb-8">
                  Our journey into entrepreneurship and tech innovation began
                  when we met in our freshman year of college while taking
                  graduate-level math classes
                </p>
                <div className="space-y-6 ">
                  <AboutDropdown/>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}