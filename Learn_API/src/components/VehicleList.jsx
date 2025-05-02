import React, { useState } from 'react';

function VehicleList({ list }) {
    const [selectedVehicle, setSelectedVehicle] = useState(list?.[0]?.sRegistrationNo || "");

  return (
    <div className="card-header d-flex justify-content-between align-items-center rounded-top-4">
      <select
        className="form-select w-50"
        value={selectedVehicle}
        onChange={(e) => setSelectedVehicle(e.target.value)}
      >
        {list.map((vehicle) => (
          <option key={vehicle._id} value={vehicle.sRegistrationNo}>
            {vehicle.sRegistrationNo} ({vehicle.sShortName})
          </option>
        ))}
      </select>

      <button className="btn btn-sm btn-outline-secondary">
        X
      </button>
    </div>
  );
}

export default VehicleList;
