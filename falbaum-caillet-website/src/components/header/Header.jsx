import React from 'react'
import './header.css'
import ContactInfo from './ContactInfo'
import FF from '../../assets/FF.png'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Welcome!</h5>
                <h1>The Falbaum Caillet Family Foundation</h1>
                <h5>is here to help! explore our website and feel free to contact us about anything!</h5>
                <ContactInfo />
                <div className='me'>
                    <img src={FF} alt='me' className='f'/>
                </div>

                <a href='#about' className='scroll__down'>About</a>
            </div>
        </header>
    )
}

export default Header