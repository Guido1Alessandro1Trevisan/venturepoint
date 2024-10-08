import Image from 'next/image'
import readablyLogo from '@/public/readablylogo.png'
import lynkrLogo from '@/public/lynkrlogo.png'
import caspermasterLogo from '@/public/caspermasterlogo.png'
import uofcatalogLogo from '@/public/uofcataloglogo.png'
import docusurferLogo from '@/public/docusurferlogo.png'
import easyfinetuneLogo from '@/public/easyfinetunelogo.png'




export default function Page() {
    const companies = [
        { name: 'Readably', logo: readablyLogo, founded: '2020', industry: 'Tech', description: 'Company 1 develops innovative AI solutions.' },
        { name: 'Lynkr', logo: lynkrLogo, founded: '2019', industry: 'Healthcare', description: 'Company 2 provides telemedicine services.' },
        { name: 'Caspermaster', logo: caspermasterLogo, founded: '2018', industry: 'Education', description: 'Company 3 creates online learning platforms.' },
        { name: 'Uofcatalog', logo: uofcatalogLogo, founded: '2021', industry: 'Finance', description: 'Company 4 offers financial planning tools.' },
        { name: 'Easyfinetune', logo: '/path/to/logo5.png', founded: '2022', industry: 'Retail', description: 'Company 5 focuses on e-commerce solutions.' },
        { name: 'Docusurfer', logo: '/path/to/logo6.png', founded: '2017', industry: 'Energy', description: 'Company 6 works on renewable energy projects.' },
    ];

    return (
        <div>
            <h1>Here is our portfolio</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {companies.map((company, index) => (
                    <div key={index} style={{ width: '48%', margin: '1%' }}>
                        <Image
                            alt="Readably logo"
                            className="object-contain"
                            src={readablyLogo}
                            layout="fill"
                            />
                        <h2>{company.name}</h2>
                        <p><strong>Date Founded:</strong> {company.founded}</p>
                        <p><strong>Industry:</strong> {company.industry}</p>
                        <p>{company.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
