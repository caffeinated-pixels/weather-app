import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        coded by{' '}
        <a
          className="footer-link"
          href="https://steviegill-webportfolio.netlify.app/"
        >
          Stevie Gill
        </a>{' '}
        |{' '}
        <a
          className="footer-link"
          href="https://github.com/caffeinated-pixels/weather-app"
        >
          <i className="fab fa-github-square"></i> Repo
        </a>
      </p>
    </footer>
  )
}
