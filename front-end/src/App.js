import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import EditSnack from './Pages/edit';
import HomeSnack from './Pages/home';
import New from './Pages/new';
import ErrorSnack from './Pages/error';

import ShowSnack from './Pages/show';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomeSnack />} />
          <Route path='snacks/new' element={<New />} />
          <Route path='snacks/:id/edit' element={<EditSnack />} />
          <Route path='snacks/:id' element={<ShowSnack />} />

          <Route path='*' element={<ErrorSnack />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
