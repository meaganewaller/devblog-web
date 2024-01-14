import { Footer } from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'

const PageLayout = ({ children, backgroundClass }: { children: React.ReactNode; backgroundClass: string }) => {
  return (
    <div className={backgroundClass}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
