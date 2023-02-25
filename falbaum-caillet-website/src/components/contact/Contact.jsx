import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dljvvcj', 'template_lrvx64t', form.current, 'jSA1wpDMfVHw8rAJn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Us</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <a href='mailto:falbaumcailletfamilyfoundation@gmail.com' target='_blank' rel='noopener noreferrer'>Send a message</a>
                    </article>
                    <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Phone</h4>
            <a href='tel:7043120465' target='_blank' rel='noopener noreferrer'>Give Us A Call</a>
          </article>
                </div>
                <form ref={form} onSubmit={sendEmail} className='form'>
          <input type='text' name='name' placeholder='Your Name'required/>
          <input type='email' name='email' placeholder='Your Email'required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact