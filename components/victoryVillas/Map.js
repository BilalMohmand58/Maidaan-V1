import React from "react";

const Map = () => {
  return (
    <div className="mt-5 w-100" id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13298.59661562754!2d72.88487464999999!3d33.562490849999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9a1b2c06d4b5%3A0x158e90470afaa034!2sAirport%20Green%20Garden%20TopCity-1%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1713342722650!5m2!1sen!2s"
        width="100%"
        height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
