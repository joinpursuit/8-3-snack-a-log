import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import HeartHealth from "./HeartHealth";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

const Base_URL = process.env.REACT_APP_API_URL;

export default function Index() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${Base_URL}/snacks`)
      .then((res) => {
        setSnacks(res.data.payload);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  console.log(snacks);

  return (
    <Container className="mt-4">
      <Row xs={1} md={3} className="Snack">
        {snacks.map((snack) => (
          <Col key={snack.id}>
            <Link to={"/snacks/" + snack.id}>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={snack.image} />
                <Card.Body>
                  <Card.Title>
                    <h4 className="card-title">
                      <HeartHealth snackHealth={snack.is_healthy} />{" "}
                      {snack.name}
                    </h4>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    // <ul>
    //   {snacks.map((snack) => (
    //     <li key={snack.id} className="Snack">
    //       <Link to={"/snacks/" + snack.id}>
    //         <h4>
    //           <HeartHealth snackHealth={snack.is_healthy} /> {snack.name}
    //           <img src={snack.image} alt="" />
    //         </h4>
    //         {/* {snack.is_healthy ? `true` : `false`} */}
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
  );
}
