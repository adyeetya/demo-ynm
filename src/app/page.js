import Aboutus from "@/components/about-us/Aboutus";
import Consult from "@/components/consult/Consult";
import Experts from "@/components/experts/Experts";
import Hero from "@/components/hero/Hero";
import Info from "@/components/info/Info";
import PaymentSlider from "@/components/paymentsSlider/PaymentSlider";
import Reviews from "@/components/reviews/Reviews";
import Products from "@/components/topProducts/Products";
import { Usp, About } from "@/components/usp-about/UspAbout";
import SingleProduct from "@/components/topProducts/singleProduct";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Hero />
      <Consult />
      {/* <Experts /> */}
      <Products />
      {/* <SingleProduct /> */}
      {/* <Aboutus /> */}
      <Usp />
      <About />

      <Reviews />
      <Info />
      {/* <PaymentSlider /> */}
    </main>
  );
}
