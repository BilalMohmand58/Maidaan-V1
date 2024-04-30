import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import { Button } from "react-bootstrap";

function CardBody({ job }) {
  const { title, thumbnail, location, slug } = job?.fields;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={9}>
          <Card className="my-2">
            <Card.Body className="position-relative d-flex align-items-center justify-content-between p-1">
              <div className="d-flex align-items-center">
                <Link href={"/careers/" + slug}>
                  {" "}
                  <img
                    src={"https:" + thumbnail?.fields?.file?.url}
                    alt="Your Image"
                    className="mr-3 jobimg"
                  />
                </Link>

                {/* <Button className=" btn btn-lg btn-sm position-absolute top-50 end-0 translate-middle-y me-4 ">
                  <Link href={"/careers/" + slug}>Apply Now</Link>
                </Button> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardBody;
