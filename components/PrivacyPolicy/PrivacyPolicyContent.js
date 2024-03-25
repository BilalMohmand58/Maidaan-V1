import React from "react";

const PrivacyPolicyContent = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <h4>Introduction</h4>
          <p>
            Maidaan Marketing Agency ("Maidaan", "we", "us", or "our") respects
            the privacy of our clients, partners, and visitors. This Privacy
            Policy outlines the types of information we may collect from you or
            that you may provide when you visit our website, use our services,
            or participate in our events, and our practices for collecting,
            using, maintaining, protecting, and disclosing that information.
            Information Collection We may collect several types of information
            from and about users of our services, including information:
          </p>
          <ul>
            <li>
              {" "}
              <strong>Personal Information:</strong> Your full name, postal
              address, email address, telephone number, and any other identifier
              by which you may be contacted online or offline.
            </li>
            <li>
              {" "}
              <strong>Event Information: </strong> Details pertaining to your
              participation in our events, such as 'Property Ka Maidaan' and
              'Maidaan Enclave'
            </li>
            <li>
              {" "}
              <strong>Financial Information: </strong> If applicable,
              information necessary to process payments or investments, such as
              your bank account or credit card details.
            </li>
            <li>
              {" "}
              <strong>Usage Information: </strong> Information about your
              internet connection, the equipment you use to access our services,
              and usage details.
            </li>
          </ul>

          <h5>Use of Information</h5>
          <p>The information we collect is used in the following ways:</p>

          <ul>
            <li>To provide, maintain, and improve our services and events.</li>
            <li>
              To provide you with information, products, or services that you
              request from us.
            </li>
            <li>
              To fulfill any other purpose for which you provide the
              information.
            </li>
            <li>To notify you about changes to our services or events.</li>
            <li>
              To allow you to participate in interactive features on our
              website.
            </li>
            <li>For any other purpose with your consent.</li>
          </ul>

          <h5>Data Security</h5>
          <p>
            We have implemented measures designed to secure your personal
            information from accidental loss and from unauthorized access, use,
            alteration, and disclosure. However, the transmission of information
            via the internet is not completely secure. While we do our best to
            protect your personal information, we cannot guarantee the security
            of your information transmitted to our website.
          </p>

          <h5>Data Retention</h5>
          <p>
            We will retain your personal information for the period necessary to
            fulfill the purposes outlined in this policy unless a longer
            retention period is required or permitted by law. Your Rights
          </p>
          <h6>You have the right to:</h6>
          <li>
            Access and receive a copy of the personal data we hold about you.
          </li>
          <li>Request correction or deletion of your personal data.</li>
          <li>Object to or restrict processing of your personal data.</li>
          <li>Request the transfer of your personal data to another party.</li>

          <h5 className="mt-3">Changes to Our Privacy Policy</h5>
          <p>
            It is our policy to post any changes we make to our privacy policy
            on this page. The date the privacy policy was last revised is
            identified at the top of the page.
          </p>
          <h5>Contact Information</h5>
          <p>
            To ask questions or comment about this privacy policy and our
            privacy practices, contact us at:
            <strong className="p-3">
              <a href="mailto:info@themaidaan.com">info@themaidaan.com</a>
            </strong>
            By using <strong>Maidaan's</strong> services, you consent to our
            collection and use of your personal information as described in this{" "}
            <strong>Privacy Policy</strong> .
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
