import Footer from './component/shared/Footer'
import Navbar from './component/shared/Navbar'
import './globals.css'

export const metadata = {
  title: 'Multi-Role App',
  description: 'Next.js Multi-role Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <>{children}</>
        <Footer/>
      </body>
    </html>
  )
}
