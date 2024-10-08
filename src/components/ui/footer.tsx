"use client"
import { Button } from "./button";

export default function Footer() {
  const handleContactClick = () => {
    window.location.href = "https://rarv1nllk7f.typeform.com/to/MwPcdYVr";
  };

  return (
    <footer id="connect" className="bg-gray-100 text-gray-600 py-12 z-10 absolute w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
            <p className="text-sm">
                Venturepoint is a venture studio based at the University of Chicago, dedicated to empowering non-technical undergraduate co-founders and helping them scale their startups from concept to success
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-900">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#approach" className="text-sm hover:text-gray-900">
                  Approach
                </a>
              </li>
              <li>
                <a href="#leaders" className="text-sm hover:text-gray-900">
                  People
                </a>
              </li>
              <li>
                <a href="#connect" className="text-sm hover:text-gray-900">
                  Connect
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <p className="text-sm">
              5801 S Ellis Ave
              <br />
              Chicago, IL 60637
              <br />
              guidotrevisan@uchicago.edu
              conradwichmann@uchicago.edu
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Get Started</h3>
            <p className="text-sm">
              Ready to bring your vision to life? Let&apos;s connect and explore
              the possibilities together.
            </p>
            <Button variant="primary" size="lg" className="w-full" onClick={handleContactClick}>
              Contact Us
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2024 VenturePoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
