import React from 'react'
import './footer.css'
import { BsLinkedin, BsFacebook } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Falbaum-Caillet Family Foundation</a>

      <ul className='permalinks'>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

{/* //for future socials for the foundation  */}
      {/* <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/falbaumcailletfoundation/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href='https://www.facebook.com/falbaumcailletfamilyfoundation/' target='_blank' rel='noopener noreferrer'><BsFacebook/></a>
      </div> */}

      <div className='footer__cpoyright'>
        <small>&copy; Falbaum-Caillet Family Foundation 2023.</small>{' '}
      </div>
    </footer>
  )
}

export default Footer