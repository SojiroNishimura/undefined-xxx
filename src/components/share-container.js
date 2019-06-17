import React from "react"
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
} from "react-share"

import { rhythm } from "../utils/typography"

class ShareContainer extends React.Component {
  render() {
    console.log(this.props)
    const iconSize = 40
    const { title, url } = this.props
    const iconStyle = {
      marginRight: rhythm(0.5)
    }

    return (
      <div style={{
        display: `flex`,
        marginTop: rhythm(1)
      }}>
        <TwitterShareButton title={title} via="snishimura926" url={url} style={iconStyle}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>

        <FacebookShareButton url={url} style={iconStyle}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>

        <LineShareButton title={title} url={url} style={iconStyle}>
          <LineIcon size={iconSize} round />
        </LineShareButton>

        <PocketShareButton title={title} url={url} style={iconStyle}>
          <PocketIcon size={iconSize} round />
        </PocketShareButton>
      </div>
    )
  }
}

export default ShareContainer
