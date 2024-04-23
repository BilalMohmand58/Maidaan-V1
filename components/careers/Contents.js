import React from "react";
import Image from "next/image";

import shape8 from "../../public/images/shape/shape8.png";
import shape5 from "../../public/images/shape/shape5.png";

const FeatureItem = ({ iconClassName, title, description }) => {
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-6"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div className={`single-features-item bg-f27e19 ${iconClassName}`}>
        <div className="icon">
          <i className={`flaticon-${iconClassName}`}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Contents = () => {
  const featureItems = [
    {
      title: "Application",
      description:
        "Submit your application through our website. Applications are reviewed by HR personnel.",
      iconClassName: "seo",
    },
    {
      title: "Identifying Talent",
      description:
        "HR Identifies the right fit who fulfills the basic criteria and is enthusiastic about the new opportunity.",
      iconClassName: "analytics",
    },
    {
      title: "Skill Assessment",
      description:
        "The interviews accompany the next step, and we advance with the ones with extraordinary skills.",
      iconClassName: "laptop",
    },
    {
      title: "Onboarding",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "analysis-1",
    },
  ];

  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="features-title">
            <span>Our Recruitment Process</span>
            <p className="my-2">
              Maidaan aims to build high-quality applications while fostering an
              enjoyable work environment that offers everyone the opportunity to
              reach their highest potential.
            </p>
          </div>

          <div className="row justify-content-center">
            {featureItems.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-animation">
          <div className="shape-img1">
            <Image src={shape8} alt="image" width={20} height={20} />
          </div>
          <div className="shape-img2">
            <Image src={shape5} alt="image" width={71} height={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
