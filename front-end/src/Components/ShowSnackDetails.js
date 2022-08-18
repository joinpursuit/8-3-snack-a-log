import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeartHealth from "./HeartHealth";

function ShowSnackDetails(){
  const [snack, setSnack] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
      .then((res)=>{
        setSnack(res.data.payload);
      }).catch(()=>{
        navigate("/not-found");
      });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
          .then((res)=>{
            navigate("/snacks");
          }).catch((err)=>{
            console.log(err);
          })
      };
    return(
        <article className = "">
          <aside>
            <h4>the snack health</h4>
            <HeartHealth snackHealth={snack.is_healthy}/>
          </aside>
          <div className = "Snack">
          <h5>Snack name: {snack.name}</h5>
            <img src={snack.image} alt={snack.name} />
            <h6>Protein: {snack.protein}</h6>
            <h6>Fiber: {snack.fiber}</h6>
            <h6>Added Sugar: {snack.added_sugar}</h6>
          </div>
            
            <div className="showNavigation">
                <div>
                {" "}
                <Link to={`/snacks`}>
                    <button>Back</button>
                </Link>
                </div>
                <div>
                {" "}
                <Link to={`/snacks/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                </div>
                <div>
                {" "}
                <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
}


export default ShowSnackDetails;