import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      {/* <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a> */}
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Developed for Kalpin Painting
          by{' '} 
           <a href="https://www.linkedin.com/in/stevesultan/">Steve</a>
        </span>
      </div>
    </footer>
  </div>
)
