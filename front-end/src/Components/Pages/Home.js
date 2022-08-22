import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css'

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className='home'>
      <h1>World of Snacks</h1>
       <h1>Welcome</h1>
       <h6 className="about"><Link to='/about'>About</Link></h6>
    </div>
  )
}
