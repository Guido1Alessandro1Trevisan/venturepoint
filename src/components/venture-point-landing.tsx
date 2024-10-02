import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function VenturePointLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F6F6] text-[#333333]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F6F6] border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="text-xl font-serif" href="#">
            VenturePoint
          </Link>
          <nav className="flex gap-6">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Companies
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Team
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Perspectives
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-24 md:py-32 lg:py-48">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl mx-auto text-center">
              Empowering visionaries. Fueling innovation. Building the future.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto text-center">
              VenturePoint partners with daring entrepreneurs to create enduring companies across industries and geographies.
            </p>
          </div>
        </section>
        <section className="w-full py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-serif mb-4">Long-term Vision</h3>
                <p className="text-gray-600">We invest in ideas that have the potential to reshape industries and create lasting impact.</p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Founder Partnership</h3>
                <p className="text-gray-600">Our team works closely with founders, offering guidance, resources, and unwavering support.</p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Global Perspective</h3>
                <p className="text-gray-600">With a worldwide network, we help companies scale beyond borders and reach new heights.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Featured Companies</h2>
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
                className="px-6 rounded-[4px]"
              >
                View All Companies
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif mb-6">Ready to Build Something Extraordinary?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with VenturePoint and access the capital, expertise, and network you need to take your vision to the next level.
            </p>
            <Button variant="primary" className="px-6 rounded-[4px]">
              Get in Touch
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