'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<any>(null)

  const teamMembers = [
    {
      name: 'Nikurai Jennifer Maton',
      role: 'Founder/President',
      image: '/images/jennifer.jpg',
      bio: ''
    },
    {
      name: 'Salima Rabiu',
      role: 'Vice President',
      image: '/images/salima.jpg',
      bio: ''
    },
    {
      name: 'Alheri Moses Katuka',
      role: 'Administrative Secretary',
      image: '/staff/alheri.jpeg',
      bio: `A dedicated educator, entrepreneur, and lifelong learner, passionate about empowering children, especially the girl child, through stewardship, mentorship, and service.
I hold a Diploma in English and a Bachelor’s Degree in Christian Education—preparing to begin a Master’s degree in Administration & Planning.

As the Administrative Secretary of EmpowHer Choices Juvenile Abuse Prevention Initiative, I am committed to advancing the organization’s mission with excellence, integrity, and compassionate service.`
    },
    {
      name: 'Rejoice Joel-Samuel (Esq)',
      role: 'Legal/Office Administrator',
      image: '/staff/rejoice.jpeg',
      bio: `I am a dedicated legal practitioner with a passion for human rights, criminal justice and committed to delivering impactful advocacy to enhance access to justice for survivors/victims, particularly for the Vulnerable, underprivileged and underrepresented communities.`
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-32 h-32 rounded-full mb-4 overflow-hidden bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
                  {member.image ? (
                    <Image src={member.image} fill className="object-cover" alt={member.name} />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold select-none">
                      {member.name.split(' ').map((n, i) => i < 3 ? n[0] : '').join('')}
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-lg mb-1 text-gray-900">{member.name}</h4>
                <div className="text-purple-500 font-medium mb-3">{member.role}</div>
                
                {member.bio && (
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline decoration-2 underline-offset-2 transition-colors cursor-pointer"
                  >
                    Read Bio
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedMember(null)} />
          
          {/* Modal Panel */}
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl z-10 border border-gray-100 transform transition-all duration-300 scale-100">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" 
              onClick={() => setSelectedMember(null)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full mb-4 overflow-hidden bg-gray-100 border-4 border-white shadow-md relative">
                {selectedMember.image ? (
                  <Image src={selectedMember.image} fill className="object-cover" alt={selectedMember.name} />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold select-none">
                    {selectedMember.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                )}
              </div>
              <h3 className="font-cabinet-grotesk font-bold text-2xl text-gray-900 mb-1">{selectedMember.name}</h3>
              <div className="text-purple-600 font-semibold text-sm mb-6">{selectedMember.role}</div>
              
              <div className="text-gray-600 text-sm leading-relaxed text-left whitespace-pre-line max-h-60 overflow-y-auto pr-2 custom-scrollbar border-t border-gray-100 pt-4">
                {selectedMember.bio}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
