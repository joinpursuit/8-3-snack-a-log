import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';

//IMPORT FROM PAGES
import New from './Pages/New';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import Index from './Pages/Index';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div className='App'>
      <main></main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/snacks' element={<Index />} />
        <Route path='/snacks/new' element={<New />} />
        <Route exact path='/snacks/:id' element={<Show />} />
        <Route path='/snacks/:id/edit' element={<Edit />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
