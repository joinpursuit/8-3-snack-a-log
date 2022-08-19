import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditForm() {
  const { id } = useParams();
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
    updateSnack(snack, id);
  };

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => {
        console.warn("error");
      });
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data.payload);
      })
      .catch((error) => {
        console.warn("error");
      });
  }, [id]);

  return (
    <div className="Edit">
      <label htmlFor="image">Image</label>
      <input
        id="image"
        value={snack.image}
        type="text"
        onChange={handleTextChange}
        required
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          value={snack.fiber}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          value={snack.protein}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          value={snack.added_sugar}
          onChange={handleTextChange}
          required
        />

        <br />

        <button type="submit">Submit</button>
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default EditForm;
