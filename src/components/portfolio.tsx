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
import uofcatalogLogo from "@/public/uofcataloglogo.png";
import docusurferLogo from '@/public/docusurferlogo.png'
import easyfinetuneLogo from '@/public/easyfinetunelogo.png'

const portfolioItems = [
  {
    title: "Readably",
    description: "Language learning needs to be adaptable in today's fast-paced world. Readably reduces the inefficiencies of fixed curricula by offering a fully personalized, AI-powered platform where learners select their own vocabulary and grammar. By tailoring exercises and using advanced spaced repetition algorithms, Readably improves retention and accelerates progress. Users learn 3x faster with higher engagement by focusing on what matters most to them, leveraging Readably's flexible approach to language learning.",
    image: readablyLogo,
    link: "https://readably.io/en",
    founded: "2020",
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
    title: "uofcatalog",
    description: "Navigating academic options can be overwhelming, but uofcatalog streamlines the process by providing quick, accurate insights into the University of Chicago's academic offerings. Powered by RAG and GPT-4o, UofCatalog reduces time spent searching for information by delivering immediate answers about degree paths, core curriculum, and course requirements.",
    image: uofcatalogLogo,
    link: "https://uofcatalog.com/",
    founded: "2022",
    industry: "Education Technology",
    showLink: true
  },
  {
    title: "Easyfinetune",
    description: "High-quality data is the key to building successful language models. Easyfinetune simplifies this process by offering curated, custom datasets designed to meet your specific needs. Whether you're working with GPT, Llama, or other models, Easyfinetune provides human curated datasets for fine-tuning, tailored to your requirements. Focus on building your model while we handle the data—quickly, efficiently, and with precision.",
    image: easyfinetuneLogo,
    link: "https://easyfinetune.com/",
    founded: "2023",
    industry: "AI & Data",
    showLink: true
  },
  {
    title: "Caspermaster",
    description: "CasperMaster.ai breaks down key competencies like classifying, diagnosing, and treating scenarios, offering detailed insights to help you excel. With rubric-based feedback and sentiment analysis, you'll learn to maintain a neutral tone while improving your overall performance. Whether you're aiming to meet or exceed expectations, CasperMaster.ai gives you the tools to maximize your results and prepare with confidence for this crucial exam.",
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
                variant="outline" 
                className="flex items-center bg-white hover:bg-gray-200 transition-colors duration-200"
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
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
              <p>Founded: {item.founded}</p>
              <p>Industry: {item.industry}</p>
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
