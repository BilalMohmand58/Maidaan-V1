// import React, { useEffect } from "react";

// function RegisterButton() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "//embed.typeform.com/next/embed.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       <button
//         data-tf-popup="pnDQPsKA"
//         data-tf-size="70px"
//         className=" position-absolute top-50 start-50 move-right "
//       >
//         Register Now
//       </button>
//     </>
//   );
// }

// export default RegisterButton;

import React from "react";

function RegisterButton() {
  const handleButtonClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScDOJqAt1bj3fb7BHi7IjMn1QYg77bvx9tMp6dNvYvrZJxa0Q/viewform?usp=sf_link",
      "_blank"
    );
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="position-absolute top-100 start-50 move-right"
      >
        Register Now
      </button>
    </>
  );
}

export default RegisterButton;
