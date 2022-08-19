import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function NewForm() {
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    image: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => {
        console.warn("error");
      });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="fiber">FIBER:</label>
        <input
          id="fiber"
          type="text"
          value={snack.fiber}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="protein">PROTEIN:</label>
        <input
          id="protein"
          type="text"
          value={snack.protein}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="added_sugar">ADDED SUGAR:</label>
        <input
          id="added_sugar"
          type="text"
          value={snack.added_sugar}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          value={snack.image}
          onChange={handleTextChange}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewForm;
