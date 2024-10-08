"use client"
import Link from "next/link"
import Image from "next/image"
import spaceImage from "@/public/space.png"



export default function Header() {

    const handleContactClick = () => {
        window.location.href = "https://rarv1nllk7f.typeform.com/to/MwPcdYVr";
    };

    return(
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
            <a href="#approach" className="text-lg font-medium hover:underline underline-offset-4">
              Approach
            </a>
            <a href="#leaders" className="text-lg font-medium hover:underline underline-offset-4">
              People
            </a>
            <button onClick={handleContactClick} className="text-lg font-medium hover:underline underline-offset-4">
              Connect
            </button>
          </nav>
        </div>
      </header>
    )
}