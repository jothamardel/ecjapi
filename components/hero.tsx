'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WORDS = [
  { text: 'FREEDOM', color: 'text-purple-600' },
  { text: 'DREAMS', color: 'text-pink-500' },
  { text: 'CHOICES', color: 'text-amber-500' },
  { text: 'LEADERSHIP', color: 'text-sky-500' },
  { text: 'OPPORTUNITY', color: 'text-emerald-500' },
]

const DREAMS_LIST = [
  `"I want to study aeronautical engineering and build spaceships!" — Amina, 14`,
  `"I will be the first female surgeon in my community to save lives." — Chioma, 12`,
  `"I want to represent my nation in the football World Cup." — Joy, 15`,
  `"I will code software that helps farmers predict rain and grow crops." — Zainab, 13`,
  `"I want to teach literature and write stories that inspire girls worldwide." — Sarah, 11`,
  `"I will build solar-powered water pumps for my village." — Fatimah, 13`,
  `"I dream of becoming a lawyer to fight for human and children rights." — Mary, 14`,
  `"I want to study marine biology and protect our oceans." — Deborah, 13`,
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [isWordFading, setIsWordFading] = useState(false)
  const [dreamIndex, setDreamIndex] = useState(0)
  const [isDreamChanging, setIsDreamChanging] = useState(false)

  // Rotate title words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsWordFading(true)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length)
        setIsWordFading(false)
      }, 300)
    }, 4000)

    return () => clearInterval(wordInterval)
  }, [])

  // Rotate dreams
  const handleSparkDream = () => {
    if (isDreamChanging) return
    setIsDreamChanging(true)
    setTimeout(() => {
      let nextIndex = dreamIndex
      while (nextIndex === dreamIndex) {
        nextIndex = Math.floor(Math.random() * DREAMS_LIST.length)
      }
      setDreamIndex(nextIndex)
      setIsDreamChanging(false)
    }, 300)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50/20 via-white to-purple-50/20 py-20 md:py-28">
      {/* Bg container */}
      <div className="absolute inset-0 rounded-bl-[100px] bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/40 pointer-events-none -z-10" aria-hidden="true">
        {/* Ambient background blur blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse-subtle pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse-subtle pointer-events-none [animation-delay:4s]" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-[60px] opacity-35 pointer-events-none" aria-hidden="true" />
      </div>

      {/* Floating Sparkles & Decors */}
      <svg className="absolute top-16 left-1/4 w-8 h-8 text-amber-400 animate-spin-slow opacity-60 hover:opacity-100 hover:scale-125 transition-all cursor-pointer hidden md:block" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>
      <svg className="absolute bottom-32 left-12 w-6 h-6 text-indigo-400 animate-float-slow opacity-50 hover:opacity-100 hover:scale-125 transition-all cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>
      <svg className="absolute top-36 right-1/3 w-7 h-7 text-pink-400 animate-float-medium opacity-50 hover:opacity-100 hover:scale-125 transition-all cursor-pointer hidden md:block" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="pt-20 pb-12 md:pt-28 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
            {/* Content Left */}
            <div className="md:w-1/2 flex flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold font-cabinet-grotesk mb-6 text-gray-900 leading-tight">
                CREATING A WORLD OF{' '}
                <span className="relative inline-flex min-w-[200px] justify-center md:justify-start">
                  <span className={`inline-block transition-all duration-300 transform ${isWordFading ? 'opacity-0 translate-y-2 scale-95' : 'opacity-100 translate-y-0 scale-100'} ${WORDS[wordIndex].color}`}>
                    {WORDS[wordIndex].text}
                  </span>
                  <svg
                    className="absolute left-0 top-full -mt-2 w-full max-w-full -z-10"
                    width="220"
                    height="24"
                    viewBox="0 0 220 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                      fill="#EAB308"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                WHERE EVERY GIRL CHILD KNOWS SHE HAS THE RIGHT TO DREAM AND LIVE A FULFILLING LIFE.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
                <Link className="btn text-white bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg hover:shadow-purple-500/20 active:scale-98 transition-all px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2" href="/donate">
                  <span>DONATE NOW</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </Link>
                <Link className="btn text-purple-700 bg-purple-50 hover:bg-purple-100/80 active:scale-98 transition-all px-8 py-3 rounded-xl font-semibold border border-purple-200/60 shadow-sm flex items-center justify-center gap-2" href="/get-involved">
                  <span>BECOME A VOLUNTEER</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
                  </svg>
                </Link>
              </div>

              {/* Dream Catalyst Widget */}
              <div
                className="p-5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/40 shadow-lg max-w-md mx-auto md:mx-0 relative overflow-hidden group/dream transition-all hover:bg-white/70 hover:border-purple-200/50 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {/* Micro-sparkle glow */}
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-purple-200/30 rounded-full filter blur-xl group-hover/dream:scale-125 transition-transform pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="animate-bounce text-base">✨</span>
                    <span className="text-xs font-bold tracking-wider text-purple-600 uppercase">Hear a Girl's Dream</span>
                  </div>

                  <div className="min-h-[72px] flex items-center w-full">
                    <p className={`text-gray-700 italic font-medium transition-all duration-300 transform leading-relaxed text-sm sm:text-base ${isDreamChanging ? 'opacity-0 scale-98 translate-y-1' : 'opacity-100 scale-100 translate-y-0'}`}>
                      {DREAMS_LIST[dreamIndex]}
                    </p>
                  </div>

                  <button
                    onClick={handleSparkDream}
                    className="mt-3.5 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 active:scale-95 shadow-sm hover:shadow transition-all"
                  >
                    <span>🔮 Spark Another Dream</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Photos & Animations Right */}
            <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center items-center min-h-[420px] md:min-h-[500px] w-full">

              {/* Main Image: Stablehand & Horsemanship */}
              <div
                className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-white group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-200/60"
                data-aos="zoom-y-out"
                data-aos-delay="400"
              >
                <Image src="/jen/empowher_choices.japi_1783442969965.jpeg" fill className="object-cover" alt="EmpowHer Choices Hero" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 text-center">
                  <span className="text-white text-xs sm:text-sm font-bold backdrop-blur-sm bg-purple-950/50 border border-white/10 px-4 py-1.5 rounded-full shadow-lg">
                    🐴 Stablehand & Horsemanship
                  </span>
                </div>
              </div>

              {/* Floating Image 1: Stablehands Lunch */}
              <div
                className="absolute -top-6 right-2 sm:right-6 md:-right-4 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl z-30 border-4 border-white animate-float-slow group cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-3"
                data-aos="fade-down-left"
                data-aos-delay="600"
              >
                <Image src="/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp Image 2026-07-08 at 11.13.40.jpeg" fill className="object-cover" alt="Stablehands Lunch" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                  <span className="text-white text-xs font-bold backdrop-blur-sm bg-indigo-950/40 border border-white/10 px-2.5 py-1 rounded-full shadow-sm">
                    🍽️ Stablehands Lunch
                  </span>
                </div>
              </div>

              {/* Floating Image 2: Horsemanship */}
              <div
                className="absolute -bottom-8 left-2 sm:left-6 md:-left-4 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white animate-float-medium group cursor-pointer transition-all duration-300 hover:scale-105 hover:-rotate-3"
                data-aos="fade-up-right"
                data-aos-delay="700"
              >
                <Image src="/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp Image 2026-07-08 at 11.13.42.jpeg" fill className="object-cover" alt="Equestrian Skills" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                  <span className="text-white text-xs font-bold backdrop-blur-sm bg-emerald-950/40 border border-white/10 px-2.5 py-1 rounded-full shadow-sm">
                    🐴 Horsemanship
                  </span>
                </div>
              </div>

              {/* Floating Image 3: Mentorship */}
              <div
                className="absolute top-6 left-0 sm:left-4 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg z-10 border-4 border-white animate-float-slow group cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-6"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <Image src="/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp Image 2026-07-08 at 11.13.44.jpeg" fill className="object-cover" alt="Mentorship Outreach" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center">
                  <span className="text-white text-[10px] font-bold backdrop-blur-sm bg-amber-950/40 border border-white/10 px-2 py-0.5 rounded-full shadow-sm">
                    👩‍👩‍👧 Mentorship
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}