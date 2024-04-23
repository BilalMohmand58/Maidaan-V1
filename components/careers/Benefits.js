import React from "react";
import Image from "next/image";

import shape8 from "../../public/images/shape/shape8.png";
import shape5 from "../../public/images/shape/shape5.png";

const BenefitItem = ({ iconClassName, title, description }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className={`single-benefit-item bg-f27e19 ${iconClassName}`}>
        <div className="icon">
          <i className={`flaticon-${iconClassName}`}></i>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const Benefits = () => {
  const featureItems = [
    {
      title: "Growth Opportunities",
      description:
        "Submit your application through our website. Applications are reviewed by HR personnel.",
      iconClassName: "check-mark",
    },
    {
      title: "Flexible Work Environment",
      description:
        "HR Identifies the right fit who fulfills the basic criteria and is enthusiastic about the new opportunity.",
      iconClassName: "check-mark",
    },
    {
      title: "Events and Celebrations",
      description:
        "The interviews accompany the next step, and we advance with the ones with extraordinary skills.",
      iconClassName: "check-mark",
    },
    {
      title: "Paid Leaves",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },

    {
      title: "Medical Allowance",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },

    {
      title: "Multiple Bonuses",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },

    {
      title: "Awesome Learning Environment",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },
    {
      title: "Company Sponsored Training",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },
    {
      title: "Company-Sponsored Sports and Adventure Activities",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },
    {
      title: "Health and Fitness Allowance",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },
    {
      title: "Free Coffee, Tea and Snacks",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },
    {
      title: "Leave In Cash",
      description:
        "Onboarding starts when candidates accept our offer. We give them our welcoming kit to be part of the Bitsol family.",
      iconClassName: "check-mark",
    },
  ];

  return (
    <>
      <div className="benefit-area pt-100 pb-70">
        <div className="container">
          <div className="features-title">
            <span>Compensation and Benefits</span>
            <p className="my-2">
              We have designed the compensation and benefits to make our
              people’s journey at Bitsol Technologies as happy and comfortable
              as one desires.
            </p>
          </div>

          <div className="row justify-content-center">
            {featureItems.map((item, index) => (
              <BenefitItem key={index} {...item} />
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

export default Benefits;
