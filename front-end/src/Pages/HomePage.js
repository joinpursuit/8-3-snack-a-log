import Home from '../Components/Home/Home.js'
import { HelmetProvider, Helmet } from "react-helmet-async";

const HomePage = () => {
    return (
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Snack-a-Log | Home</title>
          </Helmet>
        </HelmetProvider>
        <Home />
      </div>
    );
}

export default HomePage;