import Image from 'next/image'

export default function Activities() {
  const activities = [
    {
      title: 'Stablehand & Horsemanship',
      description: 'Building confidence and empathy through equestrian activities.',
      image: '/new_stills/rawuta_instagram.jpg',
      color: 'text-yellow-500'
    },
    {
      title: 'Football',
      description: 'Fostering teamwork, physical fitness, and leadership skills on the field.',
      image: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp Image 2026-07-08 at 11.13.40.jpeg',
      color: 'text-red-500'
    },
    {
      title: 'Basketball',
      description: 'Encouraging discipline, strategic thinking, and athletic excellence.',
      image: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp Image 2026-07-08 at 11.13.42.jpeg',
      color: 'text-orange-500'
    },
    {
      title: 'STEM Education',
      description: 'Equipping girls with modern technical skills in science and technology.',
      image: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp Image 2026-07-08 at 11.13.43.jpeg',
      color: 'text-sky-500'
    },
  ]

  return (
    <section className="relative bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up">
            <h2 className="h2 font-cabinet-grotesk relative inline-block">
              Our{' '}
              <span className="relative inline-flex text-purple-600">
                Core Activities
                <svg className="absolute left-0 top-full -mt-1 w-full max-w-full -z-10" width="300" height="16" viewBox="0 0 300 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10C50 6 120 4 180 8C220 11 260 14 294 10" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
                  <path d="M16 14C80 11 160 10 240 12" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
              <span className="absolute -top-4 -right-10 text-yellow-400 animate-pulse text-2xl hidden sm:inline">✨</span>
            </h2>
            <p className="text-xl text-gray-500 mt-4">We empower the girl child through diverse, engaging programs designed to build character and skill.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-48 w-full">
                  <Image src={activity.image} fill className="object-cover" alt={activity.title} />
                </div>
                <div className="p-6 flex-grow">
                  <h4 className={`font-bold text-lg mb-2 ${activity.color}`}>{activity.title}</h4>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
