// import React from "react";

// function ContactButton() {
//   return (
//     <>
//       <button
//         data-tf-popup="pnDQPsKA"
//         // data-tf-popup="01HSP704NW3ATVKX47VN7GHVGJ"
//         data-tf-size="70px"
//         className="default-btn-one"
//       >
//         Get in touch
//       </button>
//       <script src="//embed.typeform.com/next/embed.js"></script>
//     </>
//   );
// }

// export default ContactButton;

import React, { useEffect } from "react";

function ContactButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <button
        data-tf-popup="pnDQPsKA"
        data-tf-size="70px"
        className="default-btn-one"
      >
        Get in touch
      </button>
    </>
  );
}

export default ContactButton;
