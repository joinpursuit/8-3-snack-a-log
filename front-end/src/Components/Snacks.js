import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnack] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Snacks :D</h1>
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })}
    </div>
  );
}
