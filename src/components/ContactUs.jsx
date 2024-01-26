import React from "react";
import axios from "axios"
import { showErrorCard } from "../App";
import emailjs from 'emailjs-com';


function ContactUs() {

  const sendMail = async (e)=>{
    e.preventDefault()
    const templateParams = {
      "name":e.target.name.value,
      "mob":e.target.mob.value,
      "email":e.target.email.value,
      "message":e.target.message.value
  }
  try{
      const response = await emailjs.send('service_szj5qij', 'template_dy58rfo', templateParams, 'bizYb2sO0695l7E04');
      if(response.status == 200) showErrorCard('Email sent successfully','success')
      e.target.reset();
} catch (error) {

  console.error('Error sending email:', error);
  showErrorCard('Error sending email', 'error')
}

  }
  return (
    <section className="contactUs">
      <div className="upperDiv">
        Let's Harmonize Success Together:
        <br /> Your Vision, My Expertise
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div className="lowerDiv">
        <div className="h1">Get in touch</div>
        <div className="h2">Let's talk about your projects</div>

        <form onSubmit={sendMail} className="messageForm">
          <div className="inputCont">
            <div className="iconCont">
              <i class="fa-solid fa-user"></i>
              <input type="text" name="name"placeholder="Your Name" required />
            </div>

            <div className="iconCont">
              <i class="fa-solid fa-phone"></i>
              <input type="text" name="mob" placeholder="Your Phone Number" required />
            </div>

            <div className="iconCont">
              <i class="fa-solid fa-envelope"></i>
              <input type="email" name="email" placeholder="Your Email" required/>
            </div>
          </div>
          <div className="inputCont">
            <div className="iconCont textareaCont">
              <i class="fa-solid fa-message"></i>
              <textarea placeholder="Your Message" name="message" required></textarea>
            </div>
          </div>
          <button className="submitBtn">Send Message</button>

        </form>
      </div>
    </section>
  );
}

export default ContactUs;
