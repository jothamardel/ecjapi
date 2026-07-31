export const metadata = {
  title: 'About Us - EmpowHer Choices',
  description: 'Learn about our mission, vision, and values.',
}

export default function AboutUs() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 font-cabinet-grotesk mb-4">About Us</h1>
          <p className="text-xl text-gray-500">
            EmpowHer Choices Juvenile Abuse Prevention Initiative (ECJAPI) is a Girl-child advocacy organization, dedicated in speaking out against adolescent pregnancy & child marriage, through support programs for young girls in Sports, Skills Development, STEM, Stablehand Education & Horsemanship. We’ve created an ecosystem to see the Girl-Child thrive in safety & sisterhood.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="h3 font-cabinet-grotesk mb-4 text-blue-500">Our Mission</h2>
            <p className="text-gray-600">
              To engage girls in sports, skill acquisition, and computer literacy programs that build their self-esteem and independence, empowering them to make informed life choices.
            </p>
          </div>
          
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="h3 font-cabinet-grotesk mb-4 text-blue-500">Our Vision</h2>
            <p className="text-gray-600">
              A Nigeria where every girl is empowered to build a healthy future, free from the limitations of adolescent pregnancy.
            </p>
          </div>
          
          {/* Values */}
          <div className="md:col-span-2 bg-blue-50 p-8 rounded-2xl mt-8">
            <h2 className="h3 font-cabinet-grotesk mb-6 text-center">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-bold text-lg mb-2">Empowerment</h4>
                <p className="text-sm text-gray-600">Equipping girls with the tools they need to succeed.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Education</h4>
                <p className="text-sm text-gray-600">Fostering knowledge about reproductive health and rights.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Community</h4>
                <p className="text-sm text-gray-600">Building safe spaces for growth and mentorship.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Embracing modern skills like computer literacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
