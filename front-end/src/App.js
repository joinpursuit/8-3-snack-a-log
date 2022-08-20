import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';
import Home from './Components/Home';
import New from './Components/New';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='snacks/new' element={<New />} />
          <Route path='snacks/edit' element={<Edit />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
