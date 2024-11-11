import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../public/images/faq-image.jpg";

const FaqSection = () => {
  return (
    <>
      <div className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faq</span>
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is Maidaan?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Maidaan is a leading real estate marketing company, dedicated to simplifying the complexities of not just buying and selling properties but marketing then through our EAAS and MAAS services. We offer a comprehensive suite of services and utilize innovative solutions to make the real estate process more accessible and transparent for everyone.

                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What services does Maidaan offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We offer a range of services tailored to your specific
                        needs, including Sales Support i.e., Assistance and
                        guidance throughout the buying, selling process, and
                        Marketing services, A diverse spectrum of real estate
                        marketing services, including branding solutions,
                        digital marketing, and conventional marketing.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What unique advantages does Maidaan offer for real
                        estate investors?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Maidaan provides a comprehensive suite of services
                        tailored to the real estate market, including market
                        analysis, property selection, legal assistance, and
                        post-purchase support, ensuring a seamless investment
                        experience.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <Image src={faqImg} alt="image" width={540} height={382} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
