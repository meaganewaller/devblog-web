import { Footer } from '@/components/Layout/Footer'
import { FooterDivider } from '@/components/Layout/FooterDivider'
import Navbar from '@/components/Layout/Navbar'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FooterDivider />
      <Footer />
    </>
  )
}

export default PageLayout
