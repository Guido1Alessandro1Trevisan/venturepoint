'use client'

import Image from 'next/image'
import readablyLogo from '@/public/readablylogo.png'
import lynkrLogo from '@/public/lynkrlogo.png'
import caspermasterLogo from '@/public/caspermasterlogo.png'
import uofcatalogLogo from '@/public/uofcataloglogo.png'
import docusurferLogo from '@/public/docusurferlogo.png'
import easyfinetuneLogo from '@/public/easyfinetunelogo.png'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Portfolio() {
  const companies = [
    { name: 'Readably', logo: readablyLogo, founded: '2020', industry: 'Tech', description: 'Company 1 develops innovative AI solutions.' },
    { name: 'Lynkr', logo: lynkrLogo, founded: '2019', industry: 'Healthcare', description: 'Company 2 provides telemedicine services.' },
    { name: 'Caspermaster', logo: caspermasterLogo, founded: '2018', industry: 'Education', description: 'Company 3 creates online learning platforms.' },
    { name: 'Uofcatalog', logo: uofcatalogLogo, founded: '2021', industry: 'Finance', description: 'Company 4 offers financial planning tools.' },
    { name: 'Easyfinetune', logo: docusurferLogo, founded: '2022', industry: 'Retail', description: 'Company 5 focuses on e-commerce solutions.' },
    { name: 'Docusurfer', logo: easyfinetuneLogo, founded: '2017', industry: 'Energy', description: 'Company 6 works on renewable energy projects.' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  alt={`${company.name} logo`}
                  src={company.logo}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl font-semibold mb-2">{company.name}</CardTitle>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Founded:</span> {company.founded}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Industry:</span> {company.industry}
                </p>
                <p className="text-sm">{company.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}