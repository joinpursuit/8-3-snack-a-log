import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Pages/Snacks.js'
import Show from './Pages/ShowSnacks.js'
import New from './Pages/NewSnacks.js'
import Edit from './Pages/EditSnacks.js'

function App() {
	return (
		<div className='App'>
      <Routes>
        <Route path="/snacks" element={<Index />}></Route>
        <Route path="/snacks/:id" element={<Show />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
      
			
		</div>
	);
}

export default App;
