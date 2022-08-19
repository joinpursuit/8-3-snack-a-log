import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function New() {
  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/snacks`, snack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div style={{ display: "block", padding: 30 }}>
      <h3>New Snack</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={snack.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control
            type="text"
            id="image"
            name="image"
            value={snack.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="protein">Protein</Form.Label>
          <Form.Control
            type="number"
            id="protein"
            name="protein"
            value={snack.protein}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="fiber">Fiber</Form.Label>
          <Form.Control
            type="number"
            id="fiber"
            name="fiber"
            value={snack.fiber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="added_sugar">Added Sugar</Form.Label>
          <Form.Control
            type="number"
            id="added_sugar"
            name="added_sugar"
            value={snack.added_sugar}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="outline-danger" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default New;
