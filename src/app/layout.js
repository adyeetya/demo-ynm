import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import { GlobalStateProvider } from '../context/navbarContext'
import { CartProvider } from '../context/cartContext'
import Footer from '../components/footer/Footer'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from '../context/userContext'
import { ProductProvider } from '../context/productContext'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Yes'n'more - India's No. 1 Sexual Wellness Brand",
  description: 'Top Sexual Wellness Brand',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://yesnmore.com'),
  keywords: [
    'Sexual Wellness',
    'Yesnmore',
    'Sexual Health',
    'Health',
    'Products',
  ],
  authors: [{ name: "Yes'n'more" }],
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Yes'n'more",
    url: 'https://www.yesnmore.com',
    logo: 'https://www.yesnmore.com/images/logo.png',
    description:
      'Top Sexual Wellness Brand in India offering a wide range of products and expert advice.',
    sameAs: [
      'https://www.facebook.com/yesnmore',

      'https://www.instagram.com/yesnmore',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@yesnmore.com',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '57, Badli Industrial Area',
      addressLocality: 'Delhi',
      addressRegion: 'DL',
      postalCode: '110042',
      addressCountry: 'IN',
    },
  }
  return (
    <html lang="en">
  
      <body
        className={`'min-h-screen max-w-[100vw] overflow-x-hidden font-sans antialiased scroll-smooth ' ${inter.className}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Toaster />
        <GlobalStateProvider>
          <ProductProvider>
            <UserProvider>
              <CartProvider>
                <Navbar />
                {children}
                <Footer />
              </CartProvider>
            </UserProvider>
          </ProductProvider>
        </GlobalStateProvider>
      </body>
    </html>
  )
}
