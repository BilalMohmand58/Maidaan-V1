import React from "react";

const Map = () => {
  return (
    <div className="mt-5 w-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213716.28413730336!2d73.3489514373883!3d33.179554989931475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f93cfe01c3901%3A0x55a0766fffe3c351!2sMidtown%20Jhelum!5e0!3m2!1sen!2s!4v1713255628862!5m2!1sen!2s"
        width="100%"
        height="600"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
