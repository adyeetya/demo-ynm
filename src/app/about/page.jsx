import { Stepper } from "./Steppers";
import Typography from "./Typography";

import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "About Us",
  description: "Our Story & Our Journey",
};

const AboutUs = () => {
  return (
    <div className={`${poppins.className}`}>
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center md:h-[calc(100vh-64px)] h-auto aspect-square"
        style={{
          backgroundImage: "url(/images/about/ourstory_banner.jpg)",
        }}
      >
        <div className="absolute  bottom-8 left-4 md:left-20  text-white md:text-xl sm:text-sm">
          <h1 className="text-4xl md:text-7xl mb-2">OUR STORY</h1>
        </div>
      </div>
      <div className="bg-[var(--light-bg)] p-4 md:p-12">
        <h1 className="text-base sm:text-lg md:text-5xl text-gray-200 font-thin ">
          We believe that sex should be
          {/* <Typography /> */}
        </h1>
        <div className="h-[1px] rounded mt-2 md:mt-4 bg-gray-200"></div>
      </div>

      <div>
        <Stepper />
      </div>
      <div className="mx-4 md:mx-20 bg-gray-500 h-[1px]"></div>

      {/* text content */}
      <div className="text-[var(--dark-bg)]  px-4 md:px-20 flex flex-col gap-8 py-8">
        <p className="text-base md:text-lg">
          In a market flooded with one-dimensional generics, fads, and gimmicks,
          we&apos;ve decided to take a different approach to supplementation.
          Our mission at YESNMORE is to redefine how sexual wellness products
          are built, focusing on holistic and scientifically-backed solutions.
        </p>
        <p className="text-base md:text-lg bg-gray-200 p-2 flex justify-center items-center rounded">
          Our journey is grounded in honesty and transparency. From sourcing
          sustainable, clean ingredients to crafting comprehensive solutions, we
          ensure there are no hidden elements. Our ingredients are derived from
          the earth – plants, minerals, and elements – without harmful chemicals
          or unsafe toxins.
        </p>
        <p className="text-base md:text-lg">
          Sexual health and activity are crucial aspects of overall well-being,
          and we are dedicated to addressing common issues of sexual dysfunction
          with quality, natural products. Our range of sexual wellness products
          is designed to enhance your sexual experience and tackle sexual
          dysfunction effectively.
        </p>
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          <p className="text-base font-semibold md:text-lg bg-gray-200 p-2 flex justify-center items-center rounded">
            We prioritise using organic botanicals whenever possible, ensuring
            our formulas meet the highest standards. What’s printed on our
            labels is what’s in our products – no exceptions.
          </p>
          <p className="text-base md:text-lg ">
            At YES&apos;N&apos;MORE, we understand that sexual wellness is not
            just about the absence of dysfunction but about the celebration of
            pleasure and performance as integral parts of your well-being.
          </p>

          <p className="text-base md:text-lg">
            Join us in this journey towards better sexual health, where every
            product is crafted with care, ensuring a safe and satisfying sexual
            experience. Let&apos;s break the stigmas together and embrace a new
            era of sexual wellness with YES&apos;N&apos;MORE.
          </p>
          <p className="text-base font-semibold md:text-lg bg-gray-200 p-2 flex justify-center items-center rounded">
            Our commitment to you is to provide quality products that support a
            healthy, fulfilling sexual life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
