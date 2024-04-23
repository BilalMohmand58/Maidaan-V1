import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

function CardBody({ job }) {
  const { title, thumbnail, location, slug } = job?.fields;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={9}>
          <Card className="my-2">
            <Card.Body className="d-flex align-items-center justify-content-between p-1 ">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={"https:" + thumbnail?.fields?.file?.url}
                  alt="Your Image"
                  className="mr-3 jobimg"
                />
                <h6 className="mb-0">{title}</h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <Link
                  href={"/careers/" + slug}
                  className="text-decoration-none p-2"
                >
                  Apply Now
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardBody;
