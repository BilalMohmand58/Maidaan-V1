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
