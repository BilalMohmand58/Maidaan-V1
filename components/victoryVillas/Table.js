import React from "react";

const Table = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        <div className=" mt-5 d-flex align-items-center justify-content-center">
          <h3 className="text-center">Silver Villas</h3>
          <p className="ms-2"> (1250,0 SFT)</p>
        </div>
        <h6 className="text-center mb-4">Classic Single Story Design</h6>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Total Cost</th>
              <th scope="col">Total Month</th>
              <th scope="col">Development 25%</th>
              <th scope="col">Monthly Installment</th>
              <th scope="col">Possession Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">13,500,000</td>
              <td>18 months</td>
              <td>3,375,000</td>
              <td>562,500</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td scope="row">15,500,000</td>
              <td>24 months</td>
              <td>3,875,000</td>
              <td>484,375</td>
              <td>18 months</td>
            </tr>
            <tr>
              <td scope="row">17,000,000</td>
              <td>36 months</td>
              <td>4,250,000</td>
              <td>354,166</td>
              <td>30 months</td>
            </tr>
          </tbody>
        </table>

        <div className=" mt-5 d-flex align-items-center justify-content-center">
          <h3 className="text-center">Golden Villas</h3>
          <p className="ms-2"> (1970,00 SFT)</p>
        </div>
        <h6 className="text-center mb-4">
          Captivating Double Story (Corner Location)
        </h6>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Total Cost</th>
              <th scope="col">Total Month</th>
              <th scope="col">Development 25%</th>
              <th scope="col">Monthly Installment</th>
              <th scope="col">Possession Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">19,000,000</td>
              <td>18 months</td>
              <td>4,750,000</td>
              <td>791,666</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td scope="row">20,500,000</td>
              <td>24 months</td>
              <td>5,125,000</td>
              <td>640,625</td>
              <td>18 months</td>
            </tr>
            <tr>
              <td scope="row">22,500,000</td>
              <td>36 months</td>
              <td>5,625,000</td>
              <td>468,750</td>
              <td>30 months</td>
            </tr>
          </tbody>
        </table>

        <div className="  mt-5 d-flex align-items-center justify-content-center">
          <h3 className="text-center">Diamond Villas</h3>
          <p className="ms-2"> (2120,00 SFT)</p>
        </div>
        <h6 className="text-center mb-4">Luxurious Double Story Living</h6>

        <table className=" mb-5 table table-bordered">
          <thead>
            <tr>
              <th scope="col">Total Cost</th>
              <th scope="col">Total Month</th>
              <th scope="col">Development 25%</th>
              <th scope="col">Monthly Installment</th>
              <th scope="col">Possession Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">20,000,000</td>
              <td>18 months</td>
              <td>5,000,000</td>
              <td>833,333</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td scope="row">22,500,000</td>
              <td>24 months</td>
              <td>5,625,000</td>
              <td>703,125</td>
              <td>18 months</td>
            </tr>
            <tr>
              <td scope="row">24,000,000</td>
              <td>36 months</td>
              <td>6,000,000</td>
              <td>500,000</td>
              <td>30 months</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
