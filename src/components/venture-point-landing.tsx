"use client";

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import spaceImage from "@/components/ui/space.png"
import { ChevronDown } from "lucide-react"
import rich from '@/components/ui/rich.jpg'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <Image src={spaceImage} alt="Space" width={40} height={40} className="mr-3" />
            <Link className="text-3xl font-serif" href="#">
              VenturePoint
            </Link>
          </div>
          <nav className="flex gap-10">
            <a href="#portfolio" className="text-lg font-medium hover:underline underline-offset-4">
              Portfolio
            </a>
            <a href="#leaders" className="text-lg font-medium hover:underline underline-offset-4">
              Leaders
            </a>
            <a href="#approach" className="text-lg font-medium hover:underline underline-offset-4">
              Approach
            </a>
            <a href="#connect" className="text-lg font-medium hover:underline underline-offset-4">
              Connect
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 mt-24"> {/* Add mt-24 to account for fixed header */}
        <section id="hero" className="w-full h-screen flex flex-col justify-center items-center relative bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl mx-auto text-center">
              Empowering visionaries. Fueling innovation. Building the future.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto text-center font-normal">
              VenturePoint collaborates with bold innovators to build lasting enterprises that transcend industries and borders.
            </p>
          </div>
          <div className="absolute bottom-12 animate-bounce">
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
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 mb-16 max-w-xl relative ${  // Changed mb-24 to mb-16
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

        <AnimatedSection id="portfolio" className="w-full py-16 bg-white"> {/* Changed py-24 to py-16 */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Featured Companies" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-white p-6 flex items-center justify-center">
                  <img
                    alt={`Company ${i} logo`}
                    className="max-w-full max-h-full object-contain"
                    height="80"
                    src={`/placeholder.svg?height=80&width=80&text=Logo+${i}`}
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "contain",
                    }}
                    width="80"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                variant="default"
                className="px-6 rounded-[4px] font-roboto"
              >
                Explore Our Portfolio
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="leaders" className="w-full py-32 bg-white">
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
                    <h4 className="text-2xl font-serif mb-2">MICHAEL'S STORY</h4>
                    <p className="text-lg text-gray-600 font-roboto">
                      [Insert Michael's story here]
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-2">RICH'S STORY</h4>
                    <p className="text-lg text-gray-600 font-roboto">
                      [Insert Rich's story here]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer id="connect" className="bg-gray-100 text-gray-600 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
              <p className="text-sm">VenturePoint is a leading venture capital firm empowering visionaries and fueling innovation to build the future.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-900">Portfolio</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Leaders</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Insights</a></li>
                <li><a href="#" className="text-sm hover:text-gray-900">Connect</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <p className="text-sm">123 Innovation Street<br />Tech City, TC 12345<br />contact@venturepoint.com</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Get Started</h3>
              <p className="text-sm">Ready to bring your vision to life? Let's connect and explore the possibilities together.</p>
              <Button variant="primary" size="lg" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="mt-8">

            {/* Add your contact information or form here */}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm">&copy; 2024 VenturePoint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}