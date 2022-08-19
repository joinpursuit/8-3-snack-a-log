import "./Index.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import HeartHealth from "../HeartHealth";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        await axios.get(`${API}/snacks`).then((res) => {
          setSnacks(res.data.payload);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchSnacks();
  }, []);

  return (
    <section className="Snacks">
      <h1>Index</h1>
      <div className="Snack">
        {loading ? (
          <p>Loading...</p>
        ) : (
          snacks.map((snack) => (
            <article key={snack.id}>
              <h4>
                <div>
                  {snack.name}
                  <h4>
                    <HeartHealth healthCheck={snack.is_healthy} />
                  </h4>
                </div>
                <Link to={`/snacks/${snack.id}`}>
                  <Button variant="primary">Show</Button>
                </Link>
                <Link to={`/snacks/${snack.id}/edit`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
              </h4>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default Snacks;
