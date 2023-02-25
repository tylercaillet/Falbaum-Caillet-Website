import React from 'react'
import './about.css'
import Family from '../../assets/Family.jpeg'

const About = () => {
    return (
        <section id='about'>
          {/* <h5>Meet The</h5> */}
          <div className='meet__the__family'>
          <h2> Meet The Family:</h2>
          </div>

          <div className='container about__container'>
            <div className='about__me'>
            <div className='about__me-image'>
                <img src={Family} alt='about'/>
            </div>
            </div>

            <div className='about__content'>
                <h1>Vance Falbaum</h1>
                <p>Written Blurb about Vance Falbaum</p>
                <h1>Tammy Caillet</h1>
                <p>Written Blurb about Tammy Caillet</p>
                <h1>Stacy Falbaum</h1>
                <p>Written Blurb about Stacy Falbaum</p>
                <h1>Mason Falbaum</h1>
                <p>Written Blurb about Mason Falbaum</p>
                <h1>Barrett Falbaum</h1>
                <p>Written Blurb about Barrett Falbaum</p>
                <h1>Ryan Caillet</h1>
                <p>Written Blurb about Ryan Caillet</p>
                <h1>Tyler Caillet</h1>
                <p>Written Blurb about Tyler Caillet</p>
                <h1>Sophie Volpe</h1>
                <p>Written Blurb about Sophie Volpe</p>
                <h1>Jennifer Caillet</h1>
                <p>Written Blurb about Jennifer Caillet</p>
                <h1>Morgan Caillet</h1>
                <p>Written Blurb about Morgan Caillet</p>
                <a href='#contact' className='btn btn-primary'>Contact Us!</a>
            </div>
          </div>
        </section>
    )
}


export default About