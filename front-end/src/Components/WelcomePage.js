import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to Snack-A-Log!</h1>
      <h3>Add and keep track of all your favoirte snacks!</h3>
      <h3>
        Concerned about the health implications? Health Information comes
        included!
      </h3>
      <h3>Edit a Snack, or simply delete the entry all together!</h3>
      <h4>Please, enjoy!</h4>
      <Link className="snack-list" to="/snacks">
        Snacks List
      </Link>
    </div>
  );
};

export default WelcomePage;
