import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


function SnackNewForm(){
    const[snack, setSnack] = useState({
        name: "",
        image: "",
        fiber: "",
        protein: "",
        added_sugar: "",
    })

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/snacks`, snack)
          .then((res)=>{
            navigate("/snacks");
          }).catch((err)=>{
            console.log(err);
          })
    };  
    return(
        <div className="New">
            <div>New</div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Snack Name</label>
            <input required
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Snack"
            />
            <label htmlFor="image">Image:</label>
            <input required
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
            placeholder="Added_Sugar"
            />
            <br />
            <Link to={`/snacks`}><input type="submit" /></Link>
      </form>
    </div>
    )
}

export default SnackNewForm;