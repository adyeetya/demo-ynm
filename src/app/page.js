import Consult from '@/components/consult/Consult'
import Experts from '@/components/experts/Experts'
import Hero from '@/components/hero/Hero'
import Info from '@/components/info/Info'
import PaymentSlider from '@/components/paymentsSlider/PaymentSlider'
import Reviews from '@/components/reviews/Reviews'
import Products from '@/components/topProducts/Products'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export default function Home() {
  return (
    <main className={poppins.className}>
      <Hero />
      <Consult />
      <Experts />
      <Products />
      <Reviews />
      <Info />
      <PaymentSlider />
    </main>
  )
}
