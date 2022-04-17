import React, {useRef} from 'react'
import "./Contact.css"
import {MdEmail} from "react-icons/md"
import emailjs from "emailjs-com"

function Contact() {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8nwzfct', 'template_r4lnb0c', form.current, 'fQdXMxUljRXt5R34L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className="contact-option-icon"/>
            <h4>Email</h4>
            <h5>email@email.com</h5>
            <a href="mailto:email@email.com">Send Email</a>
          </article>
          <article className="contact-option">
            <MdEmail className="contact-option-icon"/>
            <h4>Message</h4>
            <h5>123-456-1234</h5>
            <a href="mailto:email@email.com">Send Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="7" placeholder="Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact