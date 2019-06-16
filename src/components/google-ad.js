import React from "react"
import Adsense from "react-adsense"

import config from "../../gatsby-config"
import { rhythm } from '../utils/typography'

function GoogleAd() {
  const { adsense } = config.siteMetadata;

  return (
    <Adsense.Google
      client={adsense.client}
      slot={adsense.slot}
      format="auto"
      responsive="true"
      style={{ display: 'block', marginBottom: rhythm(0.8) }}
    />
  )
}

export default GoogleAd