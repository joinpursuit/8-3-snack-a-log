import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Pages/Snacks'

function App() {
	return (
		<div className='App'>
      <Routes>
        <Route path="/snacks" element={<Index />}></Route>
      </Routes>
      
			
		</div>
	);
}

export default App;
