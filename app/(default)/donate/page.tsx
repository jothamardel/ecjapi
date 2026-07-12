import DonateForm from '@/components/donate-form'

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
        
        <DonateForm />
      </div>
    </section>
  )
}

