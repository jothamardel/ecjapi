export const metadata = {
  title: 'Donate - EmpowHer Choices',
  description: 'Support our mission to empower the girl-child.',
}

export default function Donate() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h1 className="h1 font-cabinet-grotesk mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-500">
            Your generous contribution supports the Padded Girl Program and helps us educate, empower, and uplift young girls across Nigeria.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
          <svg className="w-16 h-16 text-blue-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h2 className="h3 font-cabinet-grotesk mb-4">Support Our Cause</h2>
          <p className="text-gray-600 mb-8">
            Every donation counts. Whether big or small, your support directly impacts the lives of vulnerable girls.
          </p>
          <button className="btn text-white bg-blue-500 hover:bg-blue-600 w-full text-lg py-4">
            Donate Securely
          </button>
          <p className="text-xs text-gray-400 mt-4">
            Secure payments processed via our trusted payment partners.
          </p>
        </div>
      </div>
    </section>
  )
}
