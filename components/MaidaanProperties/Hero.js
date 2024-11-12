import React from 'react'

const Hero = () => {
  return (
    <> <div
    className="page-title-area d-flex align-items-center justify-content-center"
    style={{
      height: "400px",
      backgroundImage: "url('https://res.cloudinary.com/dzeldg2vi/image/upload/v1730095118/kusmh8jq29zoppn20y5g.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="text-center p-3"
      style={{
        marginBottom: "10px",
        padding: "5px 30px",
        color: "#fff",
        fontSize: "50px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontWeight: "700",
        letterSpacing: "1px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        borderRadius: "8px",
      }}
    >
      <h2 className="slide-title mb-2" style={{ color: "#fff" }}>Welcome to Maidaan Properties</h2>
    
    </div>
  </div></>
  )
}

export default Hero