import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Pages/Snacks.js';
import Show from './Pages/ShowSnacks.js';
import New from './Pages/NewSnacks.js';
import Edit from './Pages/EditSnacks.js';
import Home from './Pages/HomePage.js';
import Error from './Pages/Error.js';
import NavBar from './Components/NavBar/NavBar.js'
import About from './Pages/About'

function App() {
	return (
		<div className='App'>
      <NavBar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/snacks' element={<Index />}></Route>
				<Route path='/snacks/:id' element={<Show />}></Route>
				<Route path='/snacks/new' element={<New />}></Route>
				<Route path='/snacks/:id/edit' element={<Edit />}></Route>
        <Route path="/about" element={<About />}></Route>
				<Route path='*' element={<Error />}></Route>
			</Routes>
		</div>
	);
}

export default App;
