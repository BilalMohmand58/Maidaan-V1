import React from "react";

const SubscribeStyleTwo = () => {
  return (
    <>
      <div className="subscribe-section">
        <div className="container">
          <div className="subscribe-area-content">
            <div className="subscribe-content">
              <span className="sub-title">Get Started Instantly!</span>
              <h2>Get the only new update from this newsletter</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email"
                  name="EMAIL"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeStyleTwo;
