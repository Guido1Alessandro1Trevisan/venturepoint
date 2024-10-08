"use client";

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import rich from '@/public/rich.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Link from "next/link";
import ParticlesComponent from "@/components/particles/particles";
import readablyLogo from '@/public/readablylogo.png'
import lynkrLogo from '@/public/lynkrlogo.png'
import caspermasterLogo from '@/public/caspermasterlogo.png'
import uofcatalogLogo from '@/public/uofcataloglogo.png'




// Add this new component at the top of your file, outside the main component
const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 pr-6 sm:pr-8 whitespace-nowrap">{title}</h2>
    <div className="flex-grow h-px bg-gray-300"></div>
  </div>
);

const AnimatedSection = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }}
      transition={{ 
        duration: 0.7,
        ease: "easeOut"
      }}
      className={className}
      id={id}  // Add this line
    >
      {children}
    </motion.section>
  );
};

export default function VenturePointLanding() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#333333]">

      <main className="flex-1 mt-24"> 
        <section id="hero" className="w-full h-[90vh] flex flex-col justify-center items-center relative bg-gray-100 re">
  
          <ParticlesComponent />
     
          <div className="absolute mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl mx-auto text-center">
              Empowering visionaries. Fueling innovation. Building the future.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto text-center font-normal">
              VenturePoint is a University of Chicago venture studio enables non-technical undergraduates to scale their startups.
            </p>
          </div>
          <div className="absolute bottom-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </section>

        <AnimatedSection id="approach" className="w-full py-20 bg-white"> {/* Changed py-40 to py-20 */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Our Approach" />
            <div className="relative approach-cards">
              {[
                { title: "Long-term Vision", description: "We invest in groundbreaking ideas with the power to transform industries and create enduring impact. Our focus extends beyond immediate gains, targeting innovations that promise sustained growth and societal benefits for decades to come." },
                { title: "Founder Partnership", description: "Our team collaborates closely with founders, providing strategic guidance, resources, and steadfast support. We believe in building strong, lasting relationships that go beyond capital investment, fostering a collaborative environment where visionaries can thrive." },
                { title: "Global Perspective", description: "Leveraging our worldwide network, we empower companies to expand beyond borders and achieve new heights. Our global reach provides unique insights into diverse markets and cultures, enabling our portfolio companies to navigate international expansion with confidence." },
                { title: "Tech-Driven Innovation", description: "Our investments target cutting-edge technologies that have the potential to reshape entire industries. We're particularly interested in AI, blockchain, biotech, and clean energy solutions that address global challenges and open new frontiers of possibility." }
              ].map((item, index, array) => (
                <div 
                  key={index} 
                  className={`bg-gray-100 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    index === array.length - 1 ? 'mb-8' : 'mb-16'  // Reduced margin for the last card
                  } max-w-xl relative ${
                    index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'
                  } approach-card`}
                >
                  <h3 className="text-2xl font-serif mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600 font-roboto">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="portfolio" className="w-full pt-8 pb-8 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Featured Companies" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="https://readably.io/en" target="_blank" rel="noopener noreferrer">
                <div className="aspect-square bg-[#262626] p-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
                  <div className="w-3/4 h-3/4 relative">
                    <Image
                      alt="Readably logo"
                      className="object-contain"
                      src={readablyLogo}
                      layout="fill"
                    />
                  </div>
                </div>
              </Link>
              <Link href="https://apps.apple.com/us/app/lynkr-app/id6463145067" target="_blank" rel="noopener noreferrer">
                <div className="aspect-square bg-[#f19dc2] p-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
                  <div className="w-3/4 h-3/4 relative">
                    <Image
                      alt="Lynkr logo"
                      className="object-contain"
                      src={lynkrLogo}
                      layout="fill"
                    />
                  </div>
                </div>
              </Link>
              <Link href="https://caspermaster.ai/" target="_blank" rel="noopener noreferrer">
                <div className="aspect-square bg-[#d2d2d2] p-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
                  <div className="w-3/4 h-3/4 relative">
                    <Image
                      alt="Casper Master logo"
                      className="object-contain"
                      src={caspermasterLogo}
                      layout="fill"
                    />
                  </div>
                </div>
              </Link>
              <Link href="https://uofcatalog.com/" target="_blank" rel="noopener noreferrer">
                <div className="aspect-square bg-[#d2d2d2] p-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
                  <div className="w-3/4 h-3/4 relative">
                    <Image
                      alt="UofC Catalog logo"
                      className="object-contain"
                      src={uofcatalogLogo}
                      layout="fill"
                    />
                  </div>
                </div>
              </Link>
              {[5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-white p-6 flex items-center justify-center">
                  <Image
                    alt={`Company ${i} logo`}
                    className="max-w-full max-h-full object-contain"
                    height={80}
                    width={80}
                    src={`/placeholder.svg?height=80&width=80&text=Logo+${i}`}
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8"> {/* Changed mt-12 to mt-8 */}
              <Link
                href={"/portfolio"}>
                <button 
                  className="px-6 py-2 rounded-[4px] font-roboto bg-black text-white hover:bg-gray-800 transition-colors duration-300 shadow-sm flex items-center justify-center mx-auto"
                >
                  Explore Our Portfolio
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </AnimatedSection>


        <AnimatedSection id="leaders" className="w-full py-24 bg-white"> {/* Changed py-32 to py-24 */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Leadership" />
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2 relative" style={{ minHeight: '600px', height: 'auto' }}>
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
                  Michael Loeb and Rich Vogel launch billion dollar businesses. As partners for over 30 years, Michael and Rich have honed their wisdom and intuition to identify impactful ideas and steer startups on a trajectory of profitability.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-serif mb-2">GUIDOL&apos;S STORY</h4>
                    <p className="text-lg text-gray-600 font-roboto">
                      [Insert GUIDO&apos;s story here]
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-2">CONRAD&apos;S STORY</h4>
                    <p className="text-lg text-gray-600 font-roboto">
                      [Insert CONRAD&apos;s story here]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>


      </main>
    </div>
    
  )
}