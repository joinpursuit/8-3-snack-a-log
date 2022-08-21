import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/error.css"

export default function FourOFour() {
  return (
    <div className='error1'>
      <h1 className='error-title'>Whoops</h1>
      <img className='error' src='https://i.imgur.com/dmMsOkr.gif' alt='404'></img>
      <p className='p-error'>Sorry, something unexpected happened.</p>
      <p className='p-error'>Please <Link to="/">Click Here</Link> to go back home.</p>
    </div>
  )
}
