import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import HeartHealth from "./HeartHealth";

const Base_URL = process.env.REACT_APP_API_URL;

export default function Index() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(Base_URL)
      .then((res) => {
        setSnacks(res.data.payload);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  console.log(snacks);

  return (
    <ul>
      {snacks.map((snack) => (
        <li key={snack.id}>
          <img src={snack.image} alt="" />
          <h4>
            <HeartHealth snackHealth={snack.is_healthy} /> {snack.name}
          </h4>
          {/* {snack.is_healthy ? `true` : `false`} */}
        </li>
      ))}
    </ul>
  );
}
