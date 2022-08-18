import "./Index.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

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
    <section className="SnackIndexSection">
      <h1>Index</h1>
      <ToastContainer />
      <div className="SnackIndex">
        {loading ? (
          <p>Loading...</p>
        ) : (
          snacks.map((snack) => (
            <div key={snack.id} className="Snack">
              <h4>
                {snack.name}
                <img
                  src={snack.is_healthy ? "heartSolid" : "heartRegular"}
                  alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
                />
              </h4>
              <Link to={`/snacks/${snack.id}`}>
                <Button variant="primary">Show</Button>
              </Link>
              <Link to={`/snacks/${snack.id}/edit`}>
                <Button variant="secondary">Edit</Button>
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Snacks;
