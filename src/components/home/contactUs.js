import React from 'react'

const ContactUs = () => {
  return (
    <section id="contactSlide" className="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap">
              <p>Looking for an <br />expert technical partner?</p>
              <div className="d-none d-lg-block"><a href="contact-us.html" className="btn btn-gray">Contact Us</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-banner"></div>
      <div className="contact-number">
        <div className="container">
          <h6>Call Us</h6>
          <p><i className="align-middle icon-phone"></i>+91-7887889902</p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
