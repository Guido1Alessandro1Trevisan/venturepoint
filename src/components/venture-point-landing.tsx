"use client";

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import spaceImage from "@/components/ui/space.png"
import { ChevronDown } from "lucide-react"

export default function VenturePointLanding() {


  return (
    <div className="flex flex-col min-h-screen bg-[#F6F6F6] text-[#333333]">
<header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F6F6] border-b border-gray-200">
  <div className="container mx-auto px-4 lg:px-6 h-24 flex items-center justify-between">
    <div className="flex items-center">
      <Image src={spaceImage} alt="Space" width={40} height={40} className="mr-3" />
      <Link className="text-3xl font-serif" href="#">
        VenturePoint
      </Link>
    </div>
    <nav className="flex gap-10">
      <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
        Portfolio
      </Link>
      <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
        Our Team
      </Link>
      <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
        Insights
      </Link>
      <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
        Connect
      </Link>
    </nav>
  </div>
</header>
      <main className="flex-1 pt-16">
        <section id="hero" className="w-full h-screen flex flex-col justify-center items-center relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl mx-auto text-center">
              Empowering visionaries. Fueling innovation. Building the future.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto text-center font-normal">
              VenturePoint collaborates with bold innovators to build lasting enterprises that transcend industries and borders.
            </p>
          </div>
          <div className="absolute bottom-24 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </section>
        <section id="approach" className="w-full py-48">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-3xl mx-auto text-center mb-24">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                <h3 className="text-2xl font-serif mb-6">Long-term Vision</h3>
                <p className="text-gray-600 font-roboto text-lg">We invest in groundbreaking ideas with the power to transform industries and create enduring impact.</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-6">Founder Partnership</h3>
                <p className="text-gray-600 font-roboto text-lg">Our team collaborates closely with founders, providing strategic guidance, resources, and steadfast support.</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-6">Global Perspective</h3>
                <p className="text-gray-600 font-roboto text-lg">Leveraging our worldwide network, we empower companies to expand beyond borders and achieve new heights.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="featured" className="w-full py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-3xl mx-auto text-center mb-12">Featured Companies</h2>
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
        </section>
        <section id="cta" className="w-full py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif mb-6">Ready to Build Something Extraordinary?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-roboto">
              Join forces with VenturePoint to access the capital, expertise, and network essential for elevating your vision to unprecedented heights.
            </p>
            <Button variant="primary" className="px-6 rounded-[4px] font-roboto">
              Connect With Us
            </Button>
          </div>
        </section>
      </main>
      <footer className="py-12 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">© 2024 VenturePoint. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link className="text-sm text-gray-600 hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-gray-600 hover:underline underline-offset-4" href="#">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}