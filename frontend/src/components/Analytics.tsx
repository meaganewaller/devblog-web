import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import analyticsConfig from "@/config/analytics"
import GoogleAnalytics from "./GoogleAnalytics"
import UmamiAnalytics from "./UmamiAnalytics"

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  if (!isProduction) {
    return null
  }

  return (
    <>
      {analyticsConfig.vercel && <VercelAnalytics />}
      {analyticsConfig.google && <GoogleAnalytics />}
      {analyticsConfig.umami && <UmamiAnalytics />}
    </>
  )
}

export default Analytics

// import Script from 'next/script'
// import React from 'react'
//
// const Analytics = () => {
//   return (
//     <>
//       {process.env.NODE_ENV === 'production' && (
//         <Script
//           async
//           data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
//           src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
//         />
//       )}
//     </>
//   )
// }
//
// export default Analytics
