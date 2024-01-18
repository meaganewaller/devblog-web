import { Footer } from '@/components/Layout/Footer/index'
import { FooterDivider } from '@/components/Layout/FooterDivider'

import { InnerSection, Section } from './pageLayout.styles'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Section>
        <InnerSection>
          <main>{children}</main>
        </InnerSection>
      </Section>
      <FooterDivider />
      <Footer />
    </>
  )
}

export default PageLayout
