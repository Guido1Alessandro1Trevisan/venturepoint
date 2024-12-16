'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import readablyLogo from "@/public/readablylogo.png";
import lynkrLogo from "@/public/lynkrlogo.png";
import caspermasterLogo from "@/public/caspermasterlogo.svg";
import uchicagogenie from "@/public/uchicagogenie.png";
import docusurferLogo from '@/public/docusurferlogo.png'
import prind from '@/public/prind.png'

const portfolioItems = [
  {
    title: "Readably",
    description: "Language learning needs to be adaptable in today's fast-paced world. Readably reduces the inefficiencies of fixed curricula by offering a fully personalized, AI-powered platform where learners select their own vocabulary and grammar. By tailoring exercises and using advanced spaced repetition algorithms, Readably improves retention and accelerates progress. Users learn 3x faster with higher engagement by focusing on what matters most to them, leveraging Readably's flexible approach to language learning.",
    image: readablyLogo,
    link: "https://readably.io/en",
    founded: "2023",
    industry: "AI & Education",
    showLink: true
  },
  {
    title: "Lynkr",
    description: "Making real-life connections on campus should be fun, not frustrating. Lynkr reduces the hassle of event planning, turning 5 hours of work into just 5 minutes. Built by and for college students, Lynkr empowers users to seamlessly organize and manage everything from RSO meetings to fraternity parties, sports games, and study sessions. Students connect effortlessly with campus groups, discover events, and manage invitations with one click. With real-time analytics, payment processing, and member organization tools, Lynkr makes events and connections happen efficiently.",
    image: lynkrLogo,
    link: "https://apps.apple.com/us/app/lynkr-app/id6463145067",
    founded: "2023",
    industry: "Social Networking",
    showLink: true
  },
  {
    title: "uchicagogenie",
    description: "With over 10,000 queries in just 7 days and 1.8k unique undergraduate visitors, UChicago Genie is your personal companion, ready to answer questions about professors and course feedback, the core curriculum, majors, degree paths, course requirements, content, and schedules for undergraduate classes—without any hallucinations. At most, it may only be unhelpful.",
    image: uchicagogenie,
    link: "https://uchicagogenie.com/",
    founded: "2024",
    industry: "Education Technology",
    showLink: true
  },
  {
    title: "Prind",
    description: "(P)rind repurposes parmesan rinds—an often overlooked byproduct—into a delicious, nutritious, and sustainable snack. Packed with high-quality protein, vitamins, and minerals, (P)rind offers a convenient, healthy option for busy, health-conscious individuals. Whether you're fueling up post-workout or simply enjoying a tasty bite on the go, (P)rind has you covered! .",
    image: prind,
    link: "https://www.eatprind.com",
    founded: "2024",
    industry: "Food and Beverage Retail",
    showLink: true
  },
  {
    title: "Caspermaster",
    description: "With over 5000 monthly users, caspermaster.ai helps medical school applicants around the world to prepare for the Casper Exam, an admissions test which evaluates emotional intelligence through responses to ambiguous, realistic scenarios presented via text and video. Caspermaster.ai uses sentiment analysis to provide feedback to students preparing for their Casper exam, helping them improve their performance.",
    image: caspermasterLogo,
    link: "https://caspermaster.ai/",
    founded: "2023",
    industry: "Education Technology",
    showLink: true
  },
  {
    title: "Docusurfer",
    description: "Navigating residential lease contracts can be overwhelming, especially when dealing with complex legal jargon. Docusurfer makes it easy by analyzing your lease agreements to identify unenforceable and predatory clauses. Fine tuned with the expertise of the University of Chicago Law School and legal expertise, Docusurfer scans contracts to flag unfair terms, helping tenants make informed decisions before signing. Whether you're renting for the first time or renewing a lease, Docusurfer provides valuable insights to protect your rights.",
    image: docusurferLogo,
    link: "",
    founded: "2023",
    industry: "Legal Tech",
    showLink: false // Hide "Visit Website" button
  }
]

export function PortfolioComponent() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const getLogoClass = (title: string) => {
    if (title === "Docusurfer" || title === "Caspermaster") {
      return "object-contain scale-75"; // Adjust scale as needed
    }
    return "object-cover";
  };

  const getHeaderClass = (title: string) => {
    if (title === "Caspermaster") {
      return "bg-[#fbfcfb]";
    }
    return "";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolioItems.map((item, index) => (
        <Card key={index} className="overflow-hidden bg-white shadow-lg relative">
          {item.showLink && (
            <Link 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-2 right-2 z-10"
            >
              <Button 

                className="flex items-center bg-white hover:bg-gray-200 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          )}
          <CardHeader className={`p-0 relative h-64 ${getHeaderClass(item.title)}`}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={getLogoClass(item.title)}
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-2xl font-serif mb-2">{item.title}</CardTitle>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <p>{item.founded}</p>
              <p>{item.industry}</p>
            </div>
            <p className="text-muted-foreground mb-4">
              {expandedItems[item.title] 
                ? item.description 
                : `${item.description.slice(0, 300)}...`}
              <span 
                className="font-bold text-black cursor-pointer ml-1"
                onClick={() => toggleExpand(item.title)}
              >
                {expandedItems[item.title] ? 'Show Less' : 'Show More'}
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
