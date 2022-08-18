import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ShowSnack = () => {
  const { id } = useParams();
  const [snacks, setSnacks] = useState({});

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

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnacks(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  console.log(snacks);

  const { name, fiber, protein, added_sugar, is_healthy, image } = snacks;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{fiber}</h3>
      <h3>{protein}</h3>
      <h3>{added_sugar}</h3>
      <h4>{is_healthy}</h4>
      <img src={image} alt=''/>
      <button id={snacks.id} onChange={handleDelete}>
        Delete Entry
      </button>
      <Link to={`/snacks/edit/${id}`}>Edit Snack</Link>
    </div>
  );
};

export default ShowSnack;
