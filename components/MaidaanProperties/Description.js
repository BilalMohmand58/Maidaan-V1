import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Discription = () => {
  return (
//     <section className="py-5 bg-light">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-12">
//             <div className="text-center mb-5">
//               <h2 className="fw-bold mb-4 text-primary">
//               Our Mission
//               </h2>
            
//               <p>
              
// At Maidaan Properties, our mission is to streamline the real estate process, making it accessible, transparent, and efficient for all. We offer comprehensive services tailored to our clients' diverse needs, delivering innovative solutions that elevate every step of the buying and selling experience.

//               </p>
//               <h2 className="fw-bold mb-4 text-primary">
//               Our Vision
//               </h2>
            
//               <p>
             
// We envision a real estate landscape where transparency, efficiency, and creativity converge to create an integrated and rewarding property experience for everyone involved.

//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
<div className="pricing-section ">
<div className="container">


  <Tabs className="pricing-tab">
    <TabPanel>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6">
          <div className="single-pricing-box bg-f6f5fb">
            <div className="price">
              <span> Our Mission</span>
            </div>

            <ul className="pricing-features">
              <li>
                {/* <i className="flaticon-check-mark"></i> */}
               
Our mission is to streamline the real estate process, making it efficient for all. We offer comprehensive services tailored to our clients' diverse needs, delivering innovative solutions that elevate every step of the buying and selling experience.

             </li>

            </ul>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-pricing-box bg-f6f5fb">
            <div className="price">
              <span>Our Vision</span>
            </div>

            <ul className="pricing-features">
              <li>
                {/* <i className="flaticon-check-mark"></i> */}
                 
We envision a real estate landscape where transparency, efficiency, and creativity converge to create an integrated and rewarding property experience for everyone involved.

              </li>
             
            </ul>
          </div>
        </div>

        
      </div>
    </TabPanel>
  </Tabs>
</div>
</div>
  );
};

export default Discription;
