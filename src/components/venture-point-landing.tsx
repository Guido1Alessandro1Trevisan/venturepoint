"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import rich from "@/public/rich.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import ParticlesComponent from "@/components/particles/particles";
import readablyLogo from "@/public/readablylogo.png";
import lynkrLogo from "@/public/lynkrlogo.png";
import caspermasterLogo from "@/public/caspermasterlogo.png";
import uofcatalogLogo from "@/public/uofcataloglogo.png";
import docusurferLogo from '@/public/docusurferlogo.png'
import easyfinetuneLogo from '@/public/easyfinetunelogo.png'

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
    name: "Casper Master",
    url: "https://caspermaster.ai/",
    logo: caspermasterLogo,
    backgroundColor: "#d2d2d2",
  },
  {
    name: "UofCatalog",
    url: "https://uofcatalog.com/",
    logo: uofcatalogLogo,
    backgroundColor: "#d2d2d2",
  },
  {
    name: "Docusurfer",
    url: "",
    logo: docusurferLogo,
    backgroundColor: "#d2d2d2",
  },
  {
    name: "Easyfinetune",
    url: "https://easyfinetune/",
    logo: easyfinetuneLogo,
    backgroundColor: "#d2d2d2",
  },
];

const SectionTitle = ({ title }: { title: string }) => (
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

        
        <AnimatedSection id="approach" className="w-full py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Our Approach" />
            <div className="flex flex-col items-center approach-cards">
              {[
                { title: "Long-term Vision", description: "We invest in groundbreaking ideas that transform industries. Our focus extends beyond immediate gains, targeting innovations that leverage AI and personalization to create lasting impact and accelerate learning across various domains." },
                { title: "Founder Partnership", description: "Our team collaborates closely with founders to streamline complex processes. We support solutions that turn hours of work into minutes, empowering users to efficiently manage events, connections, and organizational tasks." },
                { title: "Global Perspective", description: "We empower companies to simplify information access on a global scale. Our investments focus on platforms that provide quick, accurate insights, reducing search time and delivering immediate answers to complex queries." }
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
                    style={{ backgroundColor: company.backgroundColor }}
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
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-serif mb-2">GUIDO&apos;S STORY</h4>
                    <p className="text-lg text-gray-600 font-roboto">
                      Guido, a Mathematics major at the University of Chicago,
                      has a broad academic background that includes PhD-level
                      machine learning coursework and MBA classes at the Booth
                      School of Business.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-2">
                      CONRAD&apos;S STORY
                    </h4>
                    <p className="text-lg text-gray-600 font-roboto">
                      Conrad, a dual Physics and Mathematics major at the
                      University of Chicago, is conducting research on
                      superconducting quantum processors at Fermilab&apos;s SQMS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
