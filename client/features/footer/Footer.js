import React from 'react'

function Footer() {
  return (
    <div id='footer'>
      <div className='footer-container' id="footer-socials">
        <a href="https://www.facebook.com/" >
          <img src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-logos-15.png" alt="Facebook" style={{ width: '2.5em', height: '2.5em' }} />
        </a>
        <a href="https://www.twitter.com/" >
          <img src="https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png" alt="Twitter" style={{ width: '2.5em', height: '2.5em' }} />
        </a>
        <a href="https://www.instagram.com/" >
          <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png" alt="Instagram" style={{ width: '2.5em', height: '2.5em' }} />
        </a>
      </div>
      <div className='footer-container' id="footer-links">
        <div className='footer-column'>
          <p className='footer-column-title'>Customer Help</p>
          <a href="#" className='footer-column-item'>FAQ</a>
          <a href="#" className='footer-column-item'>Give Feedback</a>
          <a href="#" className='footer-column-item'>Return Policy</a>
        </div>
        <div className='footer-column'>
          <p className='footer-column-title'>About Us</p>
          <a href="#" className='footer-column-item'>Careers</a>
          <a href="#" className='footer-column-item'>Philosophy</a>
          <a href="#" className='footer-column-item'>Locations</a>
        </div>
      </div>
      <div className='footer-container' id="copywrite-container">
        <p id="copywrite">© 2023 GameWorld. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer