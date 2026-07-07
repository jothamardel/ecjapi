import Image from 'next/image'
import Link from 'next/link'

export default function OurStory() {
  return (
    <section id="ourstory" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-100">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk mb-4">
              Our{' '}
              <span className="relative inline-flex text-purple-600">
                Story
                <svg className="absolute left-0 top-full -mt-2.5 w-full max-w-full -z-10" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7.5C25.5 2.5 45.5 8.5 66.5 4.5C87.5 0.5 102.5 7.5 115.5 3.5" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-500">
              The EmpowHer Choices Preg-Prevent Initiative (PPI) is a Girl-Child advocacy body set up to speak out against adolescent pregnancy and support the empowerment of young girls.
            </p>
          </div>
          {/* Content */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0 relative">
            {/* Decorative arrow pointer */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-6 -mt-24 pointer-events-none hidden md:block z-20 text-amber-500">
              <svg className="w-16 h-16 animate-float-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20C20 40 45 45 65 30C75 22 85 10 75 10C65 10 50 35 60 55C65 65 80 75 90 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M80 60 L90 70 L75 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <h3 className="h3 font-cabinet-grotesk mb-4">The Padded Girl Program</h3>
              <p className="text-gray-600 mb-4">
                Our journey includes significant outreach programs like our visit to the Christian Faith Crisis Home in Plateau State, Nigeria. Through our partnership with ZenaPads, we demonstrated the use of biodegradable sanitary pads.
              </p>
              <p className="text-gray-600 mb-4">
                We empower young girls through reproductive health education, teaching them about their bodies, consent, and healthy choices, alongside sports and skill acquisition.
              </p>
              <div className="mt-8">
                <Link className="btn text-white bg-purple-500 hover:bg-purple-600 shadow-sm" href="/about-us">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 rounded-2xl h-80 relative overflow-hidden shadow-lg">
                <Image src="/jen/nikurai_1783442800013.jpeg" fill className="object-cover" alt="The Padded Girl Program Impact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
