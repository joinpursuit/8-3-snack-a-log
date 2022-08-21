import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css'

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className='home'>
      <h1>World of Snacks</h1>
       <h1>Welcome</h1>
       <div className="year"> <Link to='/about'>{year} </Link></div>
    </div>
  )
}
