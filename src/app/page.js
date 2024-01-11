import About from '@/components/About'
import Cta from '@/components/Cta'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Path from '@/components/Path'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cta />
      <About/>
      <Features />
      <Path/>
    </div>  
    )
}
