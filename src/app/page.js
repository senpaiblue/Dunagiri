import About from '@/components/About'
import Blog from '@/components/Blog'
import Cta from '@/components/Cta'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Path from '@/components/Path'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cta />
      <About/>
      <Features />
      <Path/>
      <Gallery />
      <WhyUs/>
      <Blog />
      <Testimonials/>
      <Footer/>
    </div>  
    )
}
