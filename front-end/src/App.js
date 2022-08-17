import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexOfSnacks from './Components/IndexOfSnacks'
import ShowSnack from './Components/ShowSnack';
import NewSnack from './Components/NewSnack';
import HeartHealth from './Components/HeartHealth'
import EditSnack from './Components/EditSnack';
import Nav from './Components/NavBar';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/snacks' element={<IndexOfSnacks/>}/>
        <Route path='/snacks/:id' element={<ShowSnack/>}/>
        <Route path='/snacks/new' element={<NewSnack/>}/>
        <Route path='/snacks/edit' element={<EditSnack/>}/>
        <Route path='/snacks/health' element={<HeartHealth/>}/>
      </Routes>
      </Router>
      <h4>Snack-A-Log!</h4>
    </div>
  );
}

export default App;
