import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function JobDetails({ job }) {
  const { title, thumbnail, content } = job?.fields;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="d-flex flex-column align-items-center">
            <div className="mb-3">
              <img
                src={"https:" + thumbnail?.fields?.file?.url}
                alt="Your Image"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="">
              <h5 className="mb-2">{title}</h5>
              <p className="mb-0">{documentToReactComponents(content)}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default JobDetails;
