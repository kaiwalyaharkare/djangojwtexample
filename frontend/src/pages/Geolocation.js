import React, { useEffect, useState } from "react";
import { getdata } from "../api/getcoordinates";
const Geolocation = () => {
  const [geodata,setgeodata] = useState("");
  useEffect(() => {
    const data =  fetch('http://127.0.0.1:8000/geolocation/all/?format=json')
  .then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data);
    setgeodata(data)  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  });
  }, []);
  return (
    <div>
      Geolocation
      {JSON.stringify(geodata)}
    </div>
  );
};

export default Geolocation;
