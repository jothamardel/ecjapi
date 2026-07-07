export const metadata = {
  title: 'EmpowHer Choices Preg-Prevent Initiative',
  description: 'Creating a world of freedom where every girl child knows she has the right to dream and live a fulfilling life.',
}

import Hero from '@/components/hero'
import OurStory from '@/components/our-story'
import Activities from '@/components/activities'
import Team from '@/components/team'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Activities />
      <Team />
      <Cta />
    </>
  )
}
