import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';

//IMPORT FROM PAGES
import New from './Pages/New';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import Index from './Pages/Index';
import FourOFour from './Pages/FourOFour';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/snacks' element={<Index />} />
          <Route path='/snacks/new' element={<New />} />
          <Route exact path='/snacks/:id' element={<Show />} />
          <Route path='/snacks/:id/edit' element={<Edit />} />
          <Route path='*' element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
