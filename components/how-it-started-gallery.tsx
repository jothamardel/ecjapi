'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { galleryImages } from './gallery-data'

export default function HowItStartedGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  // Filter images to only those from the early days of "How it Started" (2024)
  const storyImages = galleryImages.filter(img => img.eventId === 'how-the-story-began-2024')
  
  // Show 6 initially, expand to all 10 if showAll is true
  const displayedImages = showAll ? storyImages : storyImages.slice(0, 6)

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  const handleNext = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null
      return (prev + 1) % storyImages.length
    })
  }

  const handlePrev = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null
      return (prev - 1 + storyImages.length) % storyImages.length
    })
  }

  const currentLightboxImage = lightboxIndex !== null ? storyImages[lightboxIndex] : null

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white py-16 md:py-24 border-t border-gray-100">
      {/* Background soft color spots for premium feel */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-100/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-100/25 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase bg-pink-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Historical Archive
          </span>
          <h2 className="h2 font-cabinet-grotesk text-gray-900 leading-tight">
            Early Days in Photos
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Take a visual walk through our initial grassroots workshops, advocacy circles, and launch campaigns in Jos and Bukuru back in 2024.
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white cursor-pointer"
            >
              {/* Image with zoom on hover */}
              <div className="relative w-full h-full">
                <Image
                  src={decodeURIComponent(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Elegant Gradient & Details Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block mb-1">
                    {image.date}
                  </span>
                  <p className="text-white font-cabinet-grotesk text-base font-bold leading-snug line-clamp-2">
                    {image.alt}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-2">
                    <svg className="w-3.5 h-3.5 text-pink-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{image.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to Show More/Less */}
        <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg rounded-xl px-6 py-3 transition duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>{showAll ? 'Show Fewer Photos' : 'View All 10 Historical Photos'}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentLightboxImage && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 md:p-6 transition-all duration-300">
          
          {/* Top Panel Controls */}
          <div className="flex justify-between items-center text-white pb-2 z-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-pink-400 font-bold block">
                {currentLightboxImage.eventTitle}
              </span>
              <span className="text-sm font-medium text-gray-300">
                📍 {currentLightboxImage.location} | {currentLightboxImage.date}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-gray-400 font-semibold">
                {lightboxIndex + 1} of {storyImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-white/10"
                aria-label="Close lightbox"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Central Slide Content */}
          <div className="relative flex-grow flex items-center justify-center my-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-white cursor-pointer select-none"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full h-[65vh] max-w-4xl">
              <Image
                src={decodeURIComponent(currentLightboxImage.src)}
                alt={currentLightboxImage.alt}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-white cursor-pointer select-none"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Panel Caption */}
          <div className="text-center text-gray-300 max-w-2xl mx-auto pt-2 z-10">
            <p className="text-sm md:text-base font-medium leading-relaxed">
              {currentLightboxImage.alt}
            </p>
            <span className="text-[10px] text-gray-500 mt-2 block">
              Tip: Use Left/Right Arrow Keys to navigate, Esc to close
            </span>
          </div>

        </div>
      )}
    </section>
  )
}
