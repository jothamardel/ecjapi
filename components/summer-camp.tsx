'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'

interface CampPackage {
  id: string
  name: string
  price: number
  description: string
  isGroup: boolean
  popular?: boolean
}

export default function SummerCamp() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFlyerZoomed, setIsFlyerZoomed] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<CampPackage | null>(null)
  
  // Registration Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guardianName: '',
    participant1: '',
    participant2: '',
    participant3: '',
  })
  
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const packages: CampPackage[] = [
    {
      id: 'individual',
      name: 'Individual Camp Pass',
      price: 85000,
      description: 'Complete registration for one participant. Includes access to all core curriculum and pop-up activities.',
      isGroup: false,
    },
    {
      id: 'group',
      name: 'Group Pass (3 Participants)',
      price: 210000,
      description: 'Register 3 participants together and save ₦45,000! Ideal for siblings or friend circles.',
      isGroup: true,
      popular: true
    }
  ]

  const handleOpenModal = (pkg: CampPackage) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
    setIsSuccess(false)
    setErrorMessage('')
    
    // Reset form data but keep email/phone if they filled them
    setFormData(prev => ({
      ...prev,
      name: '',
      participant1: '',
      participant2: '',
      participant3: ''
    }))
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPackage(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const payWithPaystack = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedPackage) return

    // Form validation based on package type
    if (selectedPackage.isGroup) {
      if (!formData.email || !formData.phone || !formData.participant1 || !formData.participant2 || !formData.participant3) {
        setErrorMessage('Please fill in email, phone, and all 3 participant names.')
        return
      }
    } else {
      if (!formData.name || !formData.email || !formData.phone) {
        setErrorMessage('Please fill in all required fields.')
        return
      }
    }

    setLoading(true)
    setErrorMessage('')

    const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_e3de2d9cc84de3829d5843a19b880c5f1fa44c56' 

    // Metadata payload for Paystack dashboard
    const customFields = [
      {
        display_name: "Camp Package",
        variable_name: "camp_package",
        value: selectedPackage.name
      },
      {
        display_name: "Contact Phone Number",
        variable_name: "phone_number",
        value: formData.phone
      },
      {
        display_name: "Guardian Name",
        variable_name: "guardian_name",
        value: formData.guardianName || "N/A"
      }
    ]

    if (selectedPackage.isGroup) {
      customFields.push(
        { display_name: "Participant 1 Name", variable_name: "participant_1", value: formData.participant1 },
        { display_name: "Participant 2 Name", variable_name: "participant_2", value: formData.participant2 },
        { display_name: "Participant 3 Name", variable_name: "participant_3", value: formData.participant3 }
      )
    } else {
      customFields.push(
        { display_name: "Participant Name", variable_name: "participant_name", value: formData.name }
      )
    }

    const handler = (window as any).PaystackPop.setup({
      key: paystackKey,
      email: formData.email,
      amount: selectedPackage.price * 100, // Paystack amount is in kobo (kobo = NGN * 100)
      currency: 'NGN',
      metadata: {
        custom_fields: customFields
      },
      callback: function (response: any) {
        setLoading(false)
        setIsSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          guardianName: '',
          participant1: '',
          participant2: '',
          participant3: ''
        })
      },
      onClose: function () {
        setLoading(false)
        setErrorMessage('Transaction canceled. You can try again.')
      }
    })

    handler.openIframe()
  }

  return (
    <section id="summer-camp" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white rounded-[2rem] mx-4 sm:mx-6 md:mx-10 my-12 shadow-2xl">
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

      {/* Background Soft Glow blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-pink-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Camp details and Flyer image */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
            
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                Skillful Start Academy
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                6 Weeks Program
              </span>
            </div>

            <h2 className="h2 font-cabinet-grotesk text-white leading-tight">
              Summer School 2026:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300">
                Unleash Creativity & Skills
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Join us for a transformational summer experience! Over six engaging weeks, participants learn essential skills, sportsmanship, STEM, and creative arts, culminating in our grand <strong>Awards & Exhibition Day</strong>.
            </p>

            {/* Core & Pop-up Activities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                <h4 className="font-cabinet-grotesk font-bold text-pink-400 uppercase tracking-wider text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full" />
                  Core Curriculum
                </h4>
                <ul className="space-y-2 text-sm text-gray-200">
                  {['Stablehand & Horsemanship', 'Football Clinics', 'Basketball Training', 'STEM Projects'].map((act, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                <h4 className="font-cabinet-grotesk font-bold text-yellow-400 uppercase tracking-wider text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  Pop-Up Activities
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Knitting', 'Painting', 'Horticulture', 'Pottery', 'Etiquette & Morals', 'Martial Arts', 'Tie & Die'].map((pop, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-gray-300 font-medium">
                      {pop}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Camp Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Date & Time</p>
                  <p className="text-sm font-semibold">20th July – 29th August</p>
                  <p className="text-[10px] text-gray-400">Mon – Fri | 9:00am – 2:00pm</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Venue Location</p>
                  <p className="text-sm font-semibold">TCNN Sports Center</p>
                  <p className="text-[10px] text-gray-400">Bukuru, Plateau State</p>
                </div>
              </div>
            </div>

            {/* Helpline details */}
            <div className="pt-2 text-xs text-gray-400 flex flex-wrap gap-x-6 gap-y-2">
              <span className="flex items-center gap-1">
                📞 <strong>Call Reservations:</strong> +234 812 365 2599
              </span>
              <span className="flex items-center gap-1">
                💬 <strong>WhatsApp Info:</strong> +234 803 445 1041
              </span>
            </div>

          </div>

          {/* Right Column: Flyer Thumbnail Preview & Pricing Cards */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-left" data-aos-delay="100">
            
            {/* Clickable Flyer Preview */}
            <div 
              onClick={() => setIsFlyerZoomed(true)}
              className="relative group h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 cursor-zoom-in bg-slate-800 transition-all duration-300 hover:scale-[1.01]"
            >
              <Image
                src="/summer/WhatsApp Image 2026-06-23 at 08.24.00.jpeg"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Skillful Start Academy Summer Camp Flyer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col justify-end p-4">
                <span className="text-xs font-bold bg-purple-600 text-white rounded-lg px-2.5 py-1.5 inline-block self-start shadow-md mb-1.5 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Click to View Full Flyer
                </span>
              </div>
            </div>

            {/* Pricing Options */}
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01] ${
                    pkg.popular
                      ? 'border-pink-500/50 bg-gradient-to-b from-white/10 to-pink-500/5 shadow-[0_0_25px_rgba(236,72,153,0.1)]'
                      : 'border-white/10'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full shadow-md">
                      Best Value Group Rate
                    </span>
                  )}

                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div>
                      <h3 className="font-cabinet-grotesk font-bold text-lg text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-gray-400">{pkg.description}</p>
                    </div>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black font-cabinet-grotesk text-white">
                        ₦{pkg.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-400">NGN</span>
                    </div>

                    <button
                      onClick={() => handleOpenModal(pkg)}
                      className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-md ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-pink-500/20'
                          : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                      }`}
                    >
                      {pkg.isGroup ? 'Buy Group Pass' : 'Register Participant'}
                    </button>
                  </div>
                </div>
              ))}
              <p className="text-[10px] text-center text-gray-500 leading-normal">
                ⚠️ <strong>Note:</strong> Learning materials are not included in the fee.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Dynamic Checkout Form Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div 
            className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left text-white max-h-[95vh]"
            data-loading={loading}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-indigo-950 to-purple-950">
              <div>
                <h3 className="font-cabinet-grotesk font-bold text-lg text-white">
                  {selectedPackage.isGroup ? 'Group Registration' : 'Participant Registration'}
                </h3>
                <p className="text-xs text-gray-400">Package: {selectedPackage.name}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-white/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto grow space-y-6">
              {isSuccess ? (
                /* Success View */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center mx-auto text-green-400 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-cabinet-grotesk font-bold text-2xl text-green-400">
                    Registration Paid!
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed px-4">
                    Your payment was successfully processed. An official welcome package with details about classes, guidelines, and curriculum preparation has been sent to your email.
                  </p>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-xs text-gray-400 leading-normal">
                    📍 <strong>Venue Reminder:</strong> TCNN Sports Center, Bukuru. Starts July 20th at 9:00am.
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleCloseModal}
                      className="btn bg-green-600 hover:bg-green-700 text-white font-bold w-full rounded-xl py-3 cursor-pointer"
                    >
                      Close Checkout
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={payWithPaystack} className="space-y-4">
                  
                  {/* Total Tag */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-400">Total to Pay:</span>
                    <span className="text-2xl font-black font-cabinet-grotesk text-pink-400">
                      ₦{selectedPackage.price.toLocaleString()}
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-3 text-xs text-red-300">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  {/* Dynamic Fields */}
                  {selectedPackage.isGroup ? (
                    <>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block">
                          Participant 1 Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="participant1"
                          value={formData.participant1}
                          onChange={handleInputChange}
                          required
                          placeholder="First participant name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block">
                          Participant 2 Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="participant2"
                          value={formData.participant2}
                          onChange={handleInputChange}
                          required
                          placeholder="Second participant name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block">
                          Participant 3 Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="participant3"
                          value={formData.participant3}
                          onChange={handleInputChange}
                          required
                          placeholder="Third participant name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block">
                        Participant Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Jennifer Nikurai"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
                      />
                    </div>
                  )}

                  {/* Standard Fields */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Contact Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. registrar@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Contact Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +234 812 365 2599"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Guardian Name & Relationship (Optional)
                    </label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleInputChange}
                      placeholder="e.g. John Nikurai (Father)"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl py-3.5 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-pink-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Connecting Paystack...</span>
                        </>
                      ) : (
                        <>
                          <span>Pay Securely with Paystack</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-[9px] text-center text-gray-500 mt-2">
                      🔒 Payments are securely managed by Paystack. Supports Cards, Transfers, USSD, and Bank App.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full Size Flyer Zoom Lightbox */}
      {isFlyerZoomed && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 md:p-6 transition-all duration-300">
          {/* Top Panel */}
          <div className="flex justify-between items-center text-white pb-2 z-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-pink-400 font-bold block">
                Skillful Start Academy
              </span>
              <span className="text-sm font-medium text-gray-300">
                Summer School 2026 Flyer
              </span>
            </div>
            <button
              onClick={() => setIsFlyerZoomed(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-white/10"
              aria-label="Close flyer"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Central Image */}
          <div className="relative flex-grow flex items-center justify-center my-4">
            <div className="relative w-full h-[80vh] max-w-2xl">
              <Image
                src="/summer/WhatsApp Image 2026-06-23 at 08.24.00.jpeg"
                alt="Skillful Start Academy Summer Camp Flyer"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* Bottom Panel */}
          <div className="text-center text-gray-400 max-w-2xl mx-auto pt-2 z-10">
            <span className="text-[10px] block">
              Tip: Click Close button at top right or press Esc to return to registration
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
