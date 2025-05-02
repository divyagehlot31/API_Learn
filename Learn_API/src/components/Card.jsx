import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VehicleList from "./VehicleList";

function Card({ kilometer, hourMeter, quantity ,  vehicleList }) {
  const [km, setKm] = useState(kilometer);
  const [hm, setHm] = useState(hourMeter);
  const [qty, setQty] = useState(quantity);
  // const [selectedvehicle, setselectedvehicle] = useState(vehicle);

  const handleQtyChange = (change) => {
    const newQty = parseInt(qty) + change;
    if (newQty >= 0) {
      setQty(newQty);
    }
  };

  // const handleDelete = () => {
  //   console.log("Card deleted");
  // };

  return (
    <div className="d-flex row justify-content-center align-items-center">
      <div
        className="card col-lg-6 shadow d-flex flex-wrap   mt-3 mb-3 border border-secondary mt-4 mb-4 "
        style={{ width: "100%", maxWidth: "600px", backgroundColor: "#e9f7fd" }}
      >

<VehicleList list={vehicleList} />

        {/* <div className="card-header  d-flex justify-content-between align-items-center rounded-top-4">
          <select
            className="form-select w-50"
            value={selectedvehicle}
            onChange={(e) => setselectedvehicle(e.target.value)}
          >
            <option>{vehicle}</option>
          </select>

          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              handleDelete();
            }}
          >
            X
          </button>
        </div> */}

        <div className="card-body">
          <div className="row g-2">
            <div className="col-md-4">
              <label className="form-label ">Kilo Meters</label>
              <input
                type="number"
                className="form-control border border-secondary"
                value={km}
                onChange={(e) => setKm(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Hours Meters</label>
              <input
                type="number"
                className="form-control border border-secondary"
                value={hm}
                onChange={(e) => setHm(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label ">Quantity</label>
              <div className="input-group">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    handleQtyChange(-1);
                  }}
                  type="button"
                >
                  –
                </button>
                <input
                  type="number"
                  className="form-control text-center border border-secondary"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    handleQtyChange(1);
                  }}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
