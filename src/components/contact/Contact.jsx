import React from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zglie9a', 'template_sdqkwid', form.current, 'gGJKcRk0le1zP6z05')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon"/>
            <h4>Email</h4>
            <h5>rameshk978433@gmail.com</h5>
            <a href="mailto:rameshk978433@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon"/>
            <h4>SMS</h4>
            <h5>+91 9784339093</h5>
            <a href="sms:+919784339093" target='_blank'>Send a SMS</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 9784339093</h5>
            <a href="https://wa.me/+919784339093" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'  placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
