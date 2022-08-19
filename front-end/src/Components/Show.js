import React from "react";
import { useState, useEffect } from "react";
import HeartHealth from "./HeartHealth";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Base_URL = process.env.REACT_APP_API_URL;

export default function Show() {
  const { id } = useParams();
  const [snack, setSnack] = useState([]);
  useEffect(() => {
    axios
      .get(Base_URL + "/" + id)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  console.log(snack);

  return (
    <article>
      Show Page
      <h3>{snack.name}</h3>
      <div>
        <img src={snack.image} alt={snack.name} />
        <aside>
          <HeartHealth snackHealth={snack.is_healthy} />
        </aside>
        <div>Protein:{snack.protein}</div>
        <div>Fiber:{snack.fiber}</div>
        <div>Added Sugar:{snack.added_sugar}</div>
      </div>
    </article>
  );
  // <>
  //     <li key={snack.id} className="Snack">
  //       <Link to={"/snack/" + snack.id}>
  //         <h4>
  //           <HeartHealth snackHealth={snack.is_healthy} /> {snack.name}
  //           <img src={snack.image} alt="" />
  //         </h4>
  //         {/* {snack.is_healthy ? `true` : `false`} */}
  //       </Link>
  //     </li>
  //   ))}

  // </ul>
  // );
}
