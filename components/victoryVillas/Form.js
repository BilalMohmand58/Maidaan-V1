import React, { useState } from "react";
import {
  Form as BootstrapForm,
  Row,
  Col,
  Button,
  Modal,
} from "react-bootstrap";
import { useToast } from "@chakra-ui/react";
import peopleData from "./peopleData.js";

const Form = () => {
  const [name, setName] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Search for the entered name and reference number
    const person = peopleData.people.find(
      (p) => p.name === name && p.referenceNumber === referenceNumber
    );

    if (person) {
      // If found, set the description
      setDescription(person.description);
      // Show success toast
      toast({
        title: "Success",
        description: "Details found.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Show the modal
      setShowModal(true);
    } else {
      // If not found, display an error toast
      toast({
        title: "Error",
        description: "Wrong name or reference number.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setDescription("");
      // Hide the modal if it's already shown
      setShowModal(false);
    }
  };

  return (
    <>
      <BootstrapForm
        className="my-4 p-5 "
        style={{ background: "#f8f9fa" }}
        onSubmit={handleSubmit}
      >
        <Row
          className=" mx-auto mb-3 justify-items-center"
          style={{ width: "100%", maxWidth: "70vw" }}
        >
          <Col xs={12} lg={5}>
            <BootstrapForm.Group
              className="mb-3 align-items-center justify-center"
              controlId="name"
            >
              <BootstrapForm.Label className="mb-0 me-3">
                Name
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </BootstrapForm.Group>
          </Col>

          <Col xs={12} lg={5}>
            <BootstrapForm.Group
              className="mb-3 align-items-center "
              controlId="referenceNumber"
            >
              <BootstrapForm.Label className="mb-0 me-3">
                Reference Number
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                placeholder="Reference Number"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                required
              />
            </BootstrapForm.Group>
          </Col>
          <Col
            xs={12}
            lg={2}
            className=" d-flex align-items-center justify-content-center"
          >
            <Button variant="primary" type="submit">
              Get Verification
            </Button>
          </Col>
        </Row>
      </BootstrapForm>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Form;
