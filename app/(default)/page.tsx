export const metadata = {
  title: 'EmpowHer Choices Juvenile Abuse Prevention Initiative (ECJAPI)',
  description: 'EmpowHer Choices Juvenile Abuse Prevention Initiative (ECJAPI) is a Girl-child advocacy organization, dedicated in speaking out against adolescent pregnancy & child marriage, through support programs for young girls.',
}

import Hero from '@/components/hero'
import OurStory from '@/components/our-story'
import HowItStarted from '@/components/how-it-started'
import HowItStartedGallery from '@/components/how-it-started-gallery'
import SummerCamp from '@/components/summer-camp'
import Activities from '@/components/activities'
import Team from '@/components/team'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <HowItStarted />
      <HowItStartedGallery />
      <SummerCamp />
      <Activities />
      <Team />
      <Cta />
    </>
  )
}
