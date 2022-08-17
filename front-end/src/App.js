import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import Index from './Components/Pages/Index';
import New from './Components/Pages/New';
import Show from './Components/Pages/Show';
import Edit from './Components/Pages/Edit';
import FourOFour from './Components/Pages/FourOFour';
import About from './Components/AboutUs'



export default function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/snacks' element={<Index />} />
            <Route path='/snacks/new' element={<New />} />
            <Route path='/snacks/:id' element={<Show />} />
            <Route path='/snacks/:id/edit' element={<Edit />} />
            <Route path='*' element={<FourOFour />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}