import React from 'react'
import './index.css'

export default function footer() {
  return (
    <div className='footer'>
      <p>&copy; 2024 TempTracker</p>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100051895200609" target="_blank">
          <div class="icon-container">
            <i className="fa-brands fa-facebook"></i>
            <div class="icon-text">Facebook</div>
          </div>
        </a>
        <a href="https://github.com/Ahmedmemon12/" target="_blank">
          <div class="icon-container">  
            <i className="fa-brands fa-github"></i>
            <div class="icon-text">Github</div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ahmed-memon-10a6k/" target="_blank">
          <div class="icon-container">
            <i className="fa-brands fa-linkedin"></i>
            <div class="icon-text">Linkedin</div>
          </div>
        </a>
      </div>

    </div>
  )
}
