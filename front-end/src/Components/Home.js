import Card from "react-bootstrap/Card";

function Home() {
  return (
    <Card>
      <Card.Body>
        <Card.Text style={{ textAlign: "center" }}>
          <h1>Welcome To The Snack-A-Log</h1>
        </Card.Text>
      </Card.Body>
      <Card.Img
        variant="top"
        src="https://i.giphy.com/media/UIsr8smnG04CoCoFPS/giphy.webp"
      />
    </Card>
  );
}

export default Home;
