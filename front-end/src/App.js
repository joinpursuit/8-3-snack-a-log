// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import Index from "./Components/Index.js";
import SnackNewForm from "./Components/SnackNewForm.js"
import ShowSnackDetails from "./Components/ShowSnackDetails.js";
import SnackEditForm from "./Components/SnackEditForm.js";
 import FourOFour from "./FourOFour.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/snacks" element = {<Index/>}/>
            <Route path="/snacks/new" element={<SnackNewForm/>}/>
            <Route path="/snacks/:id" element = {<ShowSnackDetails/>}/>
            <Route path="/snacks/:id/edit" element={<SnackEditForm/>}/>
            {/* <Route path="*" element={<FourOFour/>}/> */}
          </Routes>
          </main>
      </Router>
    </div>
  );
}

export default App;