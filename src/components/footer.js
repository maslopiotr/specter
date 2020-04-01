import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <footer className="text">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: `15vh`,
        justifyContent:`center`,
      }}
    >
       © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      
    </div>
  </footer>
)

export default Header
