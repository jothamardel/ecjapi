import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Padded Girl Program - EmpowHer Choices',
  description: 'Learn about our week-long awareness campaign for World Menstrual Health Day 2026, focused on de-stigmatizing menstrual development and dismantling rape culture.',
}

export default function PaddedGirlProgram() {
  const campaignTopics = [
    {
      title: 'Menstrual & Biological Health',
      description: 'Educating girls on menstrual hygiene and reproductive health issues, including PCOS (now PMOS) and Endometriosis.',
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Consent & Setting Boundaries',
      description: 'Providing crucial training on consent, personal boundaries, emotional manipulation, and peer pressure.',
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Sex & Mental Health',
      description: 'Addressing the intersection of reproductive health, emotional safety, confidence, and overall mental wellbeing.',
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Safety & Abuse Prevention',
      description: 'Empowering young people with the awareness they need to protect themselves from exploitation and abuse.',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ]

  const galleryImages = [
    {
      src: '/jen/empowher_choices.japi_1783442692847.jpeg',
      alt: 'EmpowHer Choices Padded Girl Campaign Presentation'
    },
    {
      src: '/jen/empowher_choices.japi_1783442969963.jpeg',
      alt: 'Padded Girl Awareness Session in Schools'
    },
    {
      src: '/jen/empowher_choices.japi_1783442969965.jpeg',
      alt: 'Students Participating in Menstrual Health Seminar'
    },
    {
      src: '/jen/manlikemagwa_1783442525426.jpeg',
      alt: 'Padded Girl Interactive Workshop'
    },
    {
      src: '/jen/manlikemagwa_1783442525427.jpeg',
      alt: 'School outreach group photograph'
    },
    {
      src: '/jen/manlikemagwa_1783442594266.jpeg',
      alt: 'Educators and Speakers at Hope High Academy'
    },
    {
      src: '/jen/nikurai_1783442755146.jpeg',
      alt: 'Founder Ms. Jennifer Nikurai Maton addressing students'
    },
    {
      src: '/jen/nikurai_1783442800013.jpeg',
      alt: 'Biodegradable Sanitary Pads Demonstration'
    }
  ]

  return (
    <div className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-pink-50/50 via-purple-50/30 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Hero Area */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up">
          <div className="inline-flex font-semibold text-xs text-pink-600 bg-pink-100 rounded-full px-3 py-1 mb-4 uppercase tracking-wider">
            Signature Initiative
          </div>
          <h1 className="h1 font-cabinet-grotesk mb-4 text-gray-900 leading-tight">
            The Padded Girl Program
          </h1>
          <p className="text-xl text-gray-600">
            Addressing reproductive health, body safety, and dismantle-rape-culture awareness in Nigerian schools.
          </p>
        </div>

        {/* Feature Grid / Banner */}
        <div className="grid md:grid-cols-12 gap-8 items-center pb-16 md:pb-24">
          <div className="md:col-span-6 space-y-6" data-aos="fade-right">
            <h2 className="h3 font-cabinet-grotesk text-gray-900">
              DE-STIGMATIZING MENSTRUAL DEVELOPMENT, DISMANTLES RAPE CULTURE
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For World Menstrual Health Day 2026, celebrated annually on the 28th of May, EmpowHer Choices Juvenile Abuse Prevention Initiative (ECJAPI) located in TCNN Bukuru, did a week-long awareness campaign in schools, concluding with an impactful summit at <strong className="text-gray-900">Hope High Academy, Zawan</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Led by Founder <strong className="text-purple-600">Ms. Jennifer Nikurai Maton</strong> alongside <strong className="text-purple-600">Ms. Felicia Samson</strong> (Med Lab Scientist, Plateau Specialist Hospital, representing The Vulnerable and Abused Intervention Initiative - TVAII), the team addressed core, intersecting issues that directly impact young teenagers' wellbeing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link className="btn text-white bg-purple-600 hover:bg-purple-700 shadow-md rounded-xl transition duration-150" href="/donate">
                Support This Program
              </Link>
              <Link className="btn text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition duration-150" href="/get-involved">
                Volunteer with Us
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-6" data-aos="fade-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] border border-gray-200">
              <Image 
                src="/jen/empowher_choices.japi_1783442692847.jpeg" 
                fill 
                className="object-cover" 
                alt="Padded Girl Program Campaign Group" 
                priority
              />
            </div>
          </div>
        </div>

        {/* Campaign Topics Section */}
        <div className="pb-16 md:pb-24 border-t border-gray-100 pt-16">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-cabinet-grotesk text-gray-900 mb-4">Intertwined Topics Addressed</h2>
            <p className="text-gray-600 text-lg">Menstrual education is about empowerment, confidence, safety, and self-protection.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {campaignTopics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-5"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-3 bg-gray-50 rounded-xl shrink-0">
                  {topic.icon}
                </div>
                <div>
                  <h3 className="font-cabinet-grotesk font-bold text-xl text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote & Voices Section */}
        <div className="pb-16 md:pb-24 border-t border-gray-100 pt-16">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-cabinet-grotesk text-gray-900 mb-4">Voices from the Field</h2>
            <p className="text-gray-600 text-lg">Partner organizations and educators sharing insights on the outreach program.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quote 1: Kabiru Dauda */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-between" data-aos="fade-right">
              <div className="space-y-4">
                <div className="text-purple-600 text-4xl font-serif leading-none">“</div>
                <p className="text-gray-700 italic leading-relaxed">
                  We will like our teenagers and young adults to know how to identify, cultivate and develop friendships that are anchored on respect, trust, honesty and kindness, establishing and keeping boundaries. While also highlighting warning signs of unhealthy relationships like control, pressure and disrespect.
                </p>
                <p className="text-gray-700 italic leading-relaxed pt-2">
                  We emphasized that menstrual education is also about empowerment and safety. Students learned about consent, personal boundaries, emotional manipulation, peer pressure, and how awareness can help young people protect themselves from exploitation and abuse.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-100 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700 shrink-0">
                  KD
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mr. Kabiru Dauda</h4>
                  <p className="text-xs text-purple-600 font-medium">Director, Let's Grow Together initiative (LGTI)</p>
                  <p className="text-[10px] text-gray-500">NGO for Boy Child Grassroot Development</p>
                </div>
              </div>
            </div>

            {/* Quote 2: Vice Principal Mr. Omojoh */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-100 shadow-sm flex flex-col justify-between" data-aos="fade-left">
              <div className="space-y-4">
                <div className="text-pink-600 text-4xl font-serif leading-none">“</div>
                <p className="text-gray-700 italic leading-relaxed">
                  This seminar provided students with practical biological health knowledge that is rarely discussed openly. It created a safe space for learning, asking questions, and addressing issues that directly affect students' wellbeing, confidence, and academic participation. The staff & students alike were enlightened.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-pink-100 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-700 shrink-0">
                  MO
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mr. Omojoh</h4>
                  <p className="text-xs text-pink-600 font-medium">Vice Principal</p>
                  <p className="text-[10px] text-gray-500">Standing in for Principal, Hope High Academy, Zawan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="pb-16 border-t border-gray-100 pt-16">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-cabinet-grotesk text-gray-900 mb-4">Outreach Gallery</h2>
            <p className="text-gray-600 text-lg">Visual highlights of the campaign across schools and Hope High Academy.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <Image 
                  src={image.src} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={image.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium leading-snug">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
