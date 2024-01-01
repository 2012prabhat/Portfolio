import React from "react";

function ContactUs() {
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

        <form action="" className="messageForm">
          <div className="inputCont">
            <div className="iconCont">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="iconCont">
              <i class="fa-solid fa-phone"></i>
              <input type="text" placeholder="Your Phone Number" required />
            </div>

            <div className="iconCont">
              <i class="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Your Email" required/>
            </div>
          </div>
          <div className="inputCont">
            <div className="iconCont textareaCont">
              <i class="fa-solid fa-message"></i>
              <textarea placeholder="Your Message" required></textarea>
            </div>
          </div>
          <button className="submitBtn">Send Message</button>

        </form>
      </div>
    </section>
  );
}

export default ContactUs;
