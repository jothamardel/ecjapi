import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      name: 'Nikurai Jennifer Maton',
      role: 'Founder/President',
      image: '/images/jennifer.jpg'
    },
    {
      name: 'Salima Rabiu',
      role: 'Vice President',
      image: '/images/salima.jpg'
    },
    {
      name: 'Rita John Gindau',
      role: 'Administrative Secretary',
      image: '/images/rita.jpg'
    }
  ]

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk relative inline-block">
              Meet Our{' '}
              <span className="relative inline-flex px-3 text-indigo-600">
                Team
                <svg className="absolute inset-0 -m-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -z-10 overflow-visible" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M3 20C3 7 30 3 60 3C90 3 97 12 97 20C97 28 85 37 55 37C25 37 3 31 3 20" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-500 mt-4">The dedicated leaders driving the EmpowHer Choices initiative.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-32 h-32 rounded-full mb-4 overflow-hidden bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center relative">
                  <Image src={member.image} fill className="object-cover" alt={member.name} />
                </div>
                <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                <div className="text-purple-500 font-medium">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
