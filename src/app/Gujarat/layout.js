import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
