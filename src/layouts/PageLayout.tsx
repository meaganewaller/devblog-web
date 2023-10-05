import { Footer } from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
