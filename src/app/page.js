import Cta from '@/components/Cta'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cta />
    </div>  
    )
}
