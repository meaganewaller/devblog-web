import Plausible from './Plausible'
import siteMetadata from '@/data/siteMetadata'

declare global {
  interface Window {
    plausible?: (...args: any[]) => void
  }
}

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return (
  <>
    {isProduction && siteMetadata.analytics.plausibleDataDomain && (
      <Plausible />
    )}
    {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
    {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
  </>
  )
}

export default Analytics;
