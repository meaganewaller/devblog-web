import { Footer } from '@/components/Layout/Footer'
import { FooterDivider } from '@/components/Layout/FooterDivider'
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <FooterDivider />
      <Footer />
    </>
  )
}

export default PageLayout
