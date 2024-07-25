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
import Head from 'next/head'

export const metadata = {
  title: "Yes'n'more - India's No. 1 Sexual Wellness Brand",
  description: 'Top Sexual Wellness Brand',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`'min-h-screen max-w-[100vw] overflow-x-hidden font-sans antialiased scroll-smooth ' ${inter.className}`}
      >
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
