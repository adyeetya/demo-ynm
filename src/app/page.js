import Consult from '@/components/consult/Consult'
import Experts from '@/components/experts/Experts'
import Hero from '@/components/hero/Hero'
import Info from '@/components/info/Info'
import PaymentSlider from '@/components/paymentsSlider/PaymentSlider'
import Reviews from '@/components/reviews/Reviews'
import Products from '@/components/topProducts/Products'
export default function Home() {
  return (
    <main>
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
