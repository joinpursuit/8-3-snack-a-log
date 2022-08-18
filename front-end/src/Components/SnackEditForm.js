import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SnackEditForm() {
    let { id } = useParams();
  
    const [snack, setSnack] = useState({
        name: "",
        image: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
    });
  
    const navigate = useNavigate();
  
    const handleTextChange = (event) => {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    };
  

  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
        .then((res)=>{
          setSnack(res.data.payload);
        }).catch((err)=>{
          navigate("/not-found");
        })
    }, [id]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(`${process.env.REACT_APP_API_URL}/snacks/${id}`, snack)
        .then((res)=>{
          navigate(`/snacks`);
        }).catch((err)=>{
          console.log(err)
        })
    };
    return (
        <div className="EditForm">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input required
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Snack"
            />
            <label htmlFor="image">Image:</label>
            <input 
            id="image"
            type="text"
            name="image"
            value={snack.image}
            placeholder="Image"
            onChange={handleTextChange}
            />
            <label htmlFor="fiber">Fiber:</label>
            <input
            id="fiber"
            type="number"
            value={snack.fiber}
            placeholder="Fiber"
            onChange={handleTextChange}
            />
            <label htmlFor="protein">Protein:</label>
            <input
            id="protein"
            type="number"
            onChange={handleTextChange}
            value={snack.protein}
            placeholder="Protein"
            />
            <label htmlFor="added_sugar">Added Sugar:</label>
            <input
            id="added_sugar"
            value={snack.added_sugar}
            type="number"
            onChange={handleTextChange}
            placeholder="Added Sugar"
            />
            <br />
            <input type="submit" />
      </form>
    </div>
    );
  }
  
  export default SnackEditForm;