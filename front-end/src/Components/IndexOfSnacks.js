import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SnackIndex = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        setSnacks(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(snacks);

  const handleDelete = (event) => {
    event.preventDefault();
    const { id } = event.target;
    console.log("HandleDelte:", id);
    const API = process.env.REACT_APP_API_URL;
    axios.delete(`${API}/snacks/${id}`).then((response) => {
      setSnacks(
        snacks.filter((snack) => {
          return snack.id !== parseInt(id);
        })
      );
    });
  };

  return (
    <div className="snacks-list">
      <h1>Snack-A-Log Index</h1>
      {snacks.map((snack, index) => {
        return (
          <div key={index}>
            <h2>{snack.name}</h2>
            <h3>{snack.fiber}</h3>
            <h3>{snack.protein}</h3>
            <h3>{snack.added_sugar}</h3>
            <h3>{snack.is_healthy}</h3>
            {/* <img>{snack.image}</img> */}
            <Link className="snack-link" to={`/snacks/${snack.id}`}>
              Snack Details
            </Link>
            <br></br>
            <button id={snack.id} onClick={handleDelete}>
              Delete Snack
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SnackIndex;
