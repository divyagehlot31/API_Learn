import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { API, token, vehicleAPI } from "../constant/ConstApi";

function Api() {
  const [Data, setData] = useState([]);
  const [vehicleList, setvehicleList] = useState([]);

  const getVehicleList = async () => {
    try {
      const res = await axios.get(vehicleAPI, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setvehicleList(res?.data?.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getApi = async () => {
    try {
      const res = await axios.get(API, {
        headers: {
          Authorization: `${token}`,
        },
      });

      setData(res?.data?.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
    getVehicleList();
  }, []);


  const addCard = () => {
    const newCard = {
      _id: Date.now(), 
      nKiloMeter: 0,
      nHourMeter: 0,
      nQuantity: 0,
      sRegistrationNo: "",
    };
    setData((prevData) => [...prevData, newCard]);
  };
  
  return (
    <>
    <button className="btn btn-primary m-3" onClick={addCard}>Add Card</button>
      {/* <card/> */}
      {Data.map((item) => (
        <Card
          key={item._id}
          kilometer={item.nKiloMeter}
          hourMeter={item.nHourMeter}
          quantity={item.nQuantity}
          vehicle={item.sRegistrationNo}
          vehicleList={vehicleList}
        />
      ))}
    </>
  );
}

export default Api;
