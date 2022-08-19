import React from "react";
import { useState, useEffect } from "react";
import HeartHealth from "./HeartHealth";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Base_URL = process.env.REACT_APP_API_URL;

export default function Show() {
  const { id } = useParams();
  const [snack, setSnack] = useState([]);
  useEffect(() => {
    axios
      .get(`${Base_URL}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((err) => {
        return err;
      });
  }, [id]);

  const navigate = useNavigate();
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${Base_URL}/snacks/${id}`, snack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(snack);

  return (
    <Container className="text-center">
      <article>
        Show Page
        <h3>{snack.name}</h3>
        <div>
          <img src={snack.image} alt={snack.name} />
          <aside>
            <HeartHealth snackHealth={snack.is_healthy} />
          </aside>
          <div>Protein: {snack.protein}</div>
          <div>Fiber: {snack.fiber}</div>
          <div>Added Sugar: {snack.added_sugar}</div>
          <Link to="/snacks">
            <Button variant="outline-danger">Back</Button>
          </Link>{" "}
          <Link to={`/snacks/${id}/edit`}>
            <Button variant="outline-danger">Edit</Button>
          </Link>{" "}
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </article>
    </Container>
  );
}
