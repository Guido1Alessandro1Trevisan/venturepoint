"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons from react-icons
import spaceImage from "@/public/space.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleContactClick = () => {
        window.location.href = "https://rarv1nllk7f.typeform.com/to/MwPcdYVr";
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 border-b border-gray-200">
            <div className="container mx-auto px-4 lg:px-6 h-16 md:h-24 flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={spaceImage} alt="Space" width={32} height={32} className="mr-2 md:mr-3" />
                    <Link href="#">
                        VenturePoint
                    </Link>
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 md:gap-10">
                    <Link href="#portfolio" className="text-sm md:text-lg font-medium hover:underline underline-offset-4">
                        Portfolio
                    </Link>
                    <Link href="#approach" className="text-sm md:text-lg font-medium hover:underline underline-offset-4">
                        Approach
                    </Link>
                    <Link href="#leaders" className="text-sm md:text-lg font-medium hover:underline underline-offset-4">
                        People
                    </Link>
                    <button onClick={handleContactClick} className="text-sm md:text-lg font-medium hover:underline underline-offset-4">
                        Connect
                    </button>
                </nav>
                {/* Hamburger Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden bg-gray-100 border-t border-gray-200">
                    <div className="flex flex-col items-center gap-4 py-4">
                        <Link href="#portfolio" className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
                            Portfolio
                        </Link>
                        <Link href="#approach" className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
                            Approach
                        </Link>
                        <Link href="#leaders" className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
                            People
                        </Link>
                        <button onClick={() => { handleContactClick(); toggleMenu(); }} className="text-lg font-medium hover:underline underline-offset-4">
                            Connect
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}
