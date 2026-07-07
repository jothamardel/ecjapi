export const metadata = {
  title: 'Contact Us - EmpowHer Choices',
  description: 'Get in touch with the EmpowHer Choices initiative.',
}

export default function ContactUs() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h1 className="h1 font-cabinet-grotesk mb-4">Contact Us</h1>
          <p className="text-xl text-gray-500">
            We would love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div>
            <h2 className="h3 font-cabinet-grotesk mb-6">Our Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-gray-600">No.10 Akila Machunga Street,<br />Behind National Library Jos,<br />Plateau State, Nigeria.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-600"><a href="mailto:info@ecjapi.org" className="text-blue-500 hover:underline">info@ecjapi.org</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">+234 812 365 2599</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="first_name">First Name <span className="text-red-500">*</span></label>
                  <input id="first_name" type="text" className="form-input w-full" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="last_name">Last Name <span className="text-red-500">*</span></label>
                  <input id="last_name" type="text" className="form-input w-full" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
                <input id="email" type="email" className="form-input w-full peer invalid:border-red-500" required />
                <p className="invisible peer-invalid:visible text-red-500 text-xs mt-1">Please enter a valid email address.</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" className="form-input w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message <span className="text-red-500">*</span></label>
                <textarea id="message" className="form-textarea w-full" rows={4} required></textarea>
              </div>
              <div>
                <button type="submit" className="btn text-white bg-blue-500 hover:bg-blue-600 w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
