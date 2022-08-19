import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Index from "./Components/Index";
import ErrorPage from "./Components/ErrorPage";
import Show from "./Components/Show";
import New from "./Components/New";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id/edit/" element={<Edit />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
