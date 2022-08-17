import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewSnack = () => {
  const [name, setName] = useState("");
  const [fiber, setFiber] = useState(0);
  const [protein, setProtein] = useState(0);
  const [added_sugar, setAdded_Sugar] = useState(0);
  const [is_healthy, setIs_Healthy] = useState(false);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const API = process.env.REACT_APP_API_URL;

    event.preventDefault();

    const newSnackRoute = `${API}/snacks/new`;

    fetch(newSnackRoute, {
      method: "POST",
      body: JSON.stringify({
        name,
        fiber,
        protein,
        added_sugar,
        is_healthy,
        image,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/snacks");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return <form onSubmit={handleSubmit}>
    <h1>Add a New Snack!</h1>
    <label>Snack Name:</label>
    <input
        type="text"
        name="snack-name"
        onChange={(event) =>{
            setName(event.target.value)
        }}
        id='new-snack-name'
        />
        <label>Fiber Amount:</label>
        <input
            type="number"
            name="fiber-count"
            onChange={(event) => {
                setFiber(event.target.value)
            }}
            id='fiber-count'
            />
            <label>Protein Amount:</label>
            <input
                type='number'
                name='protein-count'
                onChange={(event) => {
                    setProtein(event.target.value)
                }}
                id='protein-count'
                />
            <label>Any Added Sugars?:</label>
            <input 
                type='number'
                name='added-sugar-count'
                onChange={(event) => {
                    setAdded_Sugar(event.target.value)
                }}
                id='added-sugar-count'
                />
            <label>Is it Healthy?</label>
            <input
                type='checkbox'
                name='healthy'
                onClick={(event) => {
                    setIs_Healthy(!is_healthy)
                }}
                id='healthy'
                />
            <label>Snack Image</label>
            <input
                type='text'
                alt='snack'
                name='snack-image'
                onChange={(event) => {
                    setImage(event.target.value)
                }}
                id='snack-image'
                placeholder='Place Image Link Here...'
                />

                <br></br>
                <input type='submit' value='submit'/>
  </form>;
};

export default NewSnack;
