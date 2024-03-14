import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="content">
                <h4>Phone / Fax</h4>
                <p>(882) 569-7566</p>
                <p>(882) 453-4566</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="content">
                <h4>E-mail</h4>
                <p>info@themaidaan.com</p>
                <p>themaidaan@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fas fa-map-marker"></i>
              </div>
              <div className="content">
                <h4>Location</h4>
                <p>
                  Fortune Plaza Blue Area <br /> Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
