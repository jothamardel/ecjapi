'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { galleryEvents, galleryImages, GalleryImage } from '@/components/gallery-data'

function getCleanGoogleDriveUrl(url: string, width: number): string {
  if (url.includes('drive-usercontent')) {
    const match = url.match(/drive-usercontent\/([a-zA-Z0-9_-]+)/)
    if (match && match[1]) {
      const fileId = match[1]
      return `https://lh3.googleusercontent.com/d/${fileId}=w${width}`
    }
  }
  return url
}

export default function GalleryPage() {
  const [selectedEventId, setSelectedEventId] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [visibleCount, setVisibleCount] = useState<number>(12)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Reset pagination and close lightbox when filters change
  useEffect(() => {
    setVisibleCount(12)
    setLightboxIndex(null)
  }, [selectedEventId, selectedYear])

  // Get list of unique years in dataset for the year filter pills
  const availableYears = useMemo(() => {
    const years = new Set(galleryEvents.map(e => e.year.toString()))
    return ['all', ...Array.from(years).sort((a, b) => b.localeCompare(a))]
  }, [])

  // Filter events based on selected year
  const filteredEvents = useMemo(() => {
    if (selectedYear === 'all') return galleryEvents
    return galleryEvents.filter(e => e.year.toString() === selectedYear)
  }, [selectedYear])

  // Filter images based on selected event and selected year
  const filteredImages = useMemo(() => {
    return galleryImages.filter(img => {
      const matchEvent = selectedEventId === 'all' || img.eventId === selectedEventId
      const matchYear = selectedYear === 'all' || img.year.toString() === selectedYear
      return matchEvent && matchYear
    })
  }, [selectedEventId, selectedYear])

  // Rendered batch of images
  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount)
  }, [filteredImages, visibleCount])

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredImages])

  const handleNext = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null
      return (prev + 1) % filteredImages.length
    })
  }

  const handlePrev = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null
      return (prev - 1 + filteredImages.length) % filteredImages.length
    })
  }

  const currentLightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null

  return (
    <div className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-50/50 via-pink-50/20 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12" data-aos="fade-up">
          <h1 className="h1 font-cabinet-grotesk mb-4 text-gray-900 leading-tight">
            Impact & Media Gallery
          </h1>
          <p className="text-xl text-gray-500">
            A visual timeline of our campaigns, workshops, and school outreaches across Nigeria.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-12 space-y-6" data-aos="fade-up" data-aos-delay="100">
          
          {/* Year Timeline Filters */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Filter by Period</span>
            <div className="flex flex-wrap gap-2">
              {availableYears.map(year => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year)
                    setSelectedEventId('all') // Reset event when year changes
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedYear === year
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  {year === 'all' ? 'All Periods' : year}
                </button>
              ))}
            </div>
          </div>

          {/* Event Filters */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Filter by Event</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedEventId('all')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedEventId === 'all'
                    ? 'bg-purple-100 text-purple-700 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                }`}
              >
                All Events ({filteredEvents.length})
              </button>
              {filteredEvents.map(event => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEventId(event.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 text-left cursor-pointer ${
                    selectedEventId === event.id
                      ? 'bg-purple-100 text-purple-700 font-semibold border border-purple-200'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-transparent'
                  }`}
                >
                  {event.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Event Details Block */}
        {selectedEventId !== 'all' && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50/50 p-6 rounded-2xl border border-purple-100/50 mb-8" data-aos="fade-up">
            {galleryEvents.filter(e => e.id === selectedEventId).map(event => (
              <div key={event.id} className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <h2 className="text-xl font-cabinet-grotesk font-bold text-gray-900">{event.title}</h2>
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 rounded-full px-3 py-0.5">
                    {event.date}
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-medium">📍 {event.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed pt-1">{event.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Image Masonry Grid */}
        {filteredImages.length > 0 ? (
          <div>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4" data-aos="fade-up" data-aos-delay="200">
              {visibleImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => setLightboxIndex(index)}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 bg-gray-50 cursor-zoom-in"
                >
                  <div className={`relative w-full ${image.aspectRatio === 'portrait' ? 'h-96' : 'h-64'}`}>
                    <img
                      src={getCleanGoogleDriveUrl(image.src, 400)}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Subtle info overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-xs font-semibold text-pink-400 mb-1">{image.eventTitle}</span>
                    <p className="text-white text-xs leading-snug font-medium">{image.alt}</p>
                    <span className="text-[10px] text-gray-300 mt-2 block">📍 {image.location} | {image.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {filteredImages.length > visibleCount && (
              <div className="flex justify-center mt-12" data-aos="fade-up">
                <button
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="btn text-white bg-purple-600 hover:bg-purple-700 shadow-md rounded-xl transition duration-150 cursor-pointer"
                >
                  Load More Images
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200" data-aos="fade-up">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="font-cabinet-grotesk font-bold text-lg text-gray-800 mb-1">No images found</h3>
            <p className="text-gray-500 text-sm">Try selecting a different period or event filter.</p>
          </div>
        )}

      </div>

      {/* Lightbox / Image Slideshow Modal */}
      {currentLightboxImage && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 transition-all duration-300">
          
          {/* Top Panel Controls */}
          <div className="flex justify-between items-center text-white pb-2 z-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-pink-400 font-bold block">{currentLightboxImage.eventTitle}</span>
              <span className="text-sm font-medium text-gray-300">📍 {currentLightboxImage.location} | {currentLightboxImage.date}</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-gray-400 font-semibold">
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer p-2"
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
            <div className="relative max-w-full max-h-[75vh] aspect-auto flex items-center justify-center">
              <img
                src={getCleanGoogleDriveUrl(currentLightboxImage.src, 1200)}
                alt={currentLightboxImage.alt}
                className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/5"
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
            <p className="text-sm font-medium leading-relaxed">{currentLightboxImage.alt}</p>
            <span className="text-[10px] text-gray-500 mt-2 block">Tip: Use Left/Right Arrow Keys to navigate, Esc to close</span>
          </div>

        </div>
      )}
    </div>
  )
}
