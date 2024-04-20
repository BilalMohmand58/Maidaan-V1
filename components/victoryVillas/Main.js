import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Victorymap from "../../public/images/victoryVillasMap.jpg";
import airport from "../../public/images/airport.webp";
import topCity from "../../public/images/topcity.jpeg";
import tollPlaza from "../../public/images/tollPlaza.webp";
import victoryVillas from "../../public/images/victoryVillas.png";

const Main = () => {
  const [showModal1, setShowModal1] = useState(false); // State for first modal
  const [showModal2, setShowModal2] = useState(false); // State for second modal
  //   const [showModal3, setShowModal3] = useState(false); // State for third modal
  const [showModal4, setShowModal4] = useState(false); // State for 4th modal
  const [showModal5, setShowModal5] = useState(false); // State for 4th modal

  // Function first modal visibility
  const toggleModal1 = (show) => {
    setShowModal1(show);
  };

  // Function second modal visibility
  const toggleModal2 = (show) => {
    setShowModal2(show);
  };

  //   // Function  third modal visibility
  //   const toggleModal3 = (show) => {
  //     setShowModal3(show);
  //   };

  // Function third modal visibility
  const toggleModal4 = (show) => {
    setShowModal4(show);
  };

  // Function 5th modal visibility
  const toggleModal5 = (show) => {
    setShowModal5(show);
  };

  return (
    <div className="fullscreen-container" style={{ position: "relative" }}>
      <img
        src={Victorymap.src}
        alt="Image with hover effects"
        className="img-fluid p-0"
      />
      <map name="hover-map">
        <area
          onMouseEnter={() => toggleModal1(true)} // Show first modal on hover enter
          style={{
            position: "absolute",
            top: "80%",
            left: "2%",
            width: "7%",
            height: "8%",
            // backgroundColor: "rgba(255, 0, 0, 0.5)",
          }}
          shape="rect"
          coords="0,0,50,10"
          href="#"
        />
        <area
          onMouseEnter={() => toggleModal2(true)} // Show second modal on hover enter
          style={{
            position: "absolute",
            top: "56%",
            left: "64%",
            width: "13%",
            height: "10%",
            // backgroundColor: "rgba(0, 255, 0, 0.5)",
          }}
          shape="rect"
          coords="50,10,100,20"
          href="#"
        />

        {/* <area
          onMouseEnter={() => toggleModal3(true)} // Show third modal on hover enter
          style={{
            position: "absolute",
            top: "42%",
            left: "39%",
            width: "4%",
            height: "7%",
            // backgroundColor: "rgba(255, 0, 0, 0.5)",
          }}
          shape="rect"
          coords="0,0,50,10"
          href="#"
        /> */}

        <area
          onMouseEnter={() => toggleModal4(true)} // Show 4th modal on hover enter
          style={{
            position: "absolute",
            top: "16%",
            left: "50%",
            width: "4%",
            height: "4%",
            // backgroundColor: "rgba(255, 0, 0, 0.5)",
          }}
          shape="rect"
          coords="0,0,50,10"
          href="#"
        />

        <area
          onMouseEnter={() => toggleModal5(true)} // Show 4th modal on hover enter
          style={{
            position: "absolute",
            top: "7%",
            left: "61%",
            width: "8%",
            height: "4%",
            // backgroundColor: "rgba(255, 0, 0, 0.5)",
          }}
          shape="rect"
          coords="0,0,50,10"
          href="#"
        />
      </map>

      {/* First Modal component */}
      <Modal show={showModal1} onHide={() => toggleModal1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Islambad International Airport</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={airport.src}
            alt="Islamabad Airport"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>

      {/* Second Modal component */}
      <Modal show={showModal2} onHide={() => toggleModal2(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Victory Villas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Victory Villas is proud to introduce a stunning collection of villas
            in the heart of Islamabad.
          </p>
        </Modal.Body>
      </Modal>

      {/* third Modal component */}
      {/* <Modal show={showModal3} onHide={() => toggleModal3(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Rakh Pind Ranjha</Modal.Title>
        </Modal.Header>
      </Modal> */}

      {/* 4th Modal component */}
      <Modal show={showModal4} onHide={() => toggleModal4(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Top City-1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={topCity.src}
            alt="Top City-1"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>

      {/* 5th Modal component */}
      <Modal show={showModal5} onHide={() => toggleModal5(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Islamabad Toll Plaza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={tollPlaza.src}
            alt="Islamabad Toll Plaza"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>
      <style>
        {`
          .fullscreen-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
};

export default Main;
