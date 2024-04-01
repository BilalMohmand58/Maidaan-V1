import React from "react";

const Detail = () => {
  return (
    <div className="container">
      <div
        className="col-lg-8 col-md-12 pe-4 my-4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-once="true"
        style={{ maxWidth: "80%" }}
      >
        <div className="about-area-content text-center">
          <span
            className="details-title"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Invest In Pakistan
          </span>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Unlocking Lucrative Opportunities: Investing in Pakistan
          </h3>

          <p>
            Explore the dynamic landscape of investment opportunities in
            Pakistan, a city renowned for its innovation, economic resilience,
            and strategic location. With its investor-friendly policies,
            thriving business ecosystem, and ambitious development projects,
            Pakistan offers a wealth of prospects across various sectors
            including real estate, technology, tourism, and renewable energy.
            Discover the key insights and trends
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
