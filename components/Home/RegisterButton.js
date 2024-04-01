import React, { useEffect } from "react";

function RegisterButton() {
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
        className=" position-absolute top-50 start-50 move-right "
      >
        Register Now
      </button>
    </>
  );
}

export default RegisterButton;
