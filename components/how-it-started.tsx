'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HowItStarted() {
  const milestones = [
    {
      year: 'May 2024',
      title: 'The Seed is Sown',
      description: 'Founder Ms. Jennifer Nikurai Maton recognized a critical gap in adolescent protection and menstrual support in Bukuru. A small circle of educators and medical advocates met to design a grassroots intervention.'
    },
    {
      year: 'June 2024',
      title: 'First School Outreaches',
      description: 'Launched our initial interactive workshops. We spoke openly in classrooms about reproductive health, consent, and self-protection, distributing our first batch of sanitary packages.'
    },
    {
      year: 'October 2025',
      title: 'Boy Child Partnership',
      description: 'Collaborated with the Let\'s Grow Together Initiative (LGTI) to host seminars for teen boys, fostering friendships anchored in mutual respect, accountability, and healthy boundaries.'
    },
    {
      year: 'May 2026',
      title: 'TCNN Partnership & Scale',
      description: 'Formalized our partnership with TCNN Bukuru and represented the Plateau Specialist Hospital TVAII team, expanding the Padded Girl Program across Plateau State.'
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-16 md:py-24 border-t border-gray-100">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-100/30 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-100/30 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          
          {/* Content Left: Historical Storytelling */}
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
            <div>
              <span className="text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Our Genesis
              </span>
              <h2 className="h2 font-cabinet-grotesk text-gray-900 leading-tight">
                How It Started
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              EmpowHer Choices Preg-Prevent Initiative began as a direct response to rising adolescent exploitation and adolescent pregnancy inBukuru, Plateau State. What started as small, passionate discussions among a few local change-makers quickly evolved into a dedicated advocacy framework.
            </p>

            {/* Micro Timeline */}
            <div className="relative border-l border-purple-100 pl-6 ml-3 py-2 space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-500 bg-white group-hover:bg-purple-600 transition-colors duration-200" />
                  
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 rounded-md px-2 py-0.5 inline-block">
                      {milestone.year}
                    </span>
                    <h4 className="font-cabinet-grotesk font-bold text-gray-900 text-base">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/gallery?event=how-the-story-began-2024"
                className="btn text-white bg-purple-600 hover:bg-purple-700 shadow-md rounded-xl transition duration-150 cursor-pointer inline-flex items-center gap-2"
              >
                <span>View Historical Photo Gallery</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Content Right: Photo Collage of Early Days */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center" data-aos="fade-left" data-aos-delay="200">
            
            {/* Main Center Image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-300 z-10 bg-gray-100">
              <Image
                src="/how_the_story_began/WhatsApp Image 2026-07-08 at 11.10.16.jpeg"
                fill
                className="object-cover"
                alt="First student group counseling session"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 text-white">
                <p className="text-xs font-bold">Jos / Bukuru, 2024</p>
                <p className="text-[10px] text-gray-300">Our very first classroom mentorship workshops.</p>
              </div>
            </div>

            {/* Back Floating Image 1 (Top Left) */}
            <div className="absolute -top-6 -left-6 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-6 transform hover:rotate-0 transition-transform duration-300 z-20 bg-gray-100 hidden sm:block">
              <Image
                src="/how_the_story_began/WhatsApp Image 2026-07-08 at 11.10.14.jpeg"
                fill
                className="object-cover"
                alt="Inaugural partnership talks"
              />
            </div>

            {/* Back Floating Image 2 (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-6 transform hover:rotate-0 transition-transform duration-300 z-20 bg-gray-100 hidden sm:block">
              <Image
                src="/how_the_story_began/WhatsApp Image 2026-07-08 at 11.10.35.jpeg"
                fill
                className="object-cover"
                alt="Early leadership circle"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
