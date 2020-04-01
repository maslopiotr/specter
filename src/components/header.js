import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header className="section1 parallax text">
    <div
      style={{
        display: `grid`,
        margin: `0 auto`,
        maxWidth: 960,
        height: `100vh`,
        justifyContent:`center`,
      }}
    >
      <div style={{ margin: 0, display:`flex`, justifyContent:`center`, alignItems:`center`, height:`100vh`, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h1>{siteTitle}</h1>
          <p>{siteDescription}</p>
          
        </Link>
      </div>
      
    </div>
  </header>
)

export default Header
