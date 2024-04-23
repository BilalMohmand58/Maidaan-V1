import React from "react";
import CardBody from "./CardBody";

const Cards = ({ jobs }) => {
  return (
    <div className="pt-5">
      {jobs?.map((job) => (
        <CardBody job={job} />
      ))}
    </div>
  );
};

export default Cards;
