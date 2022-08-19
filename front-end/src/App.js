import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';
import Home from './Components/Home';
import New from './Components/New';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
