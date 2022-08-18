import React from 'react'
import { Link } from 'react-router-dom'

export default function FourOFour() {
  return (
    <div>
      <h1>Whoops</h1>
      <img src='https://i.imgur.com/dmMsOkr.gif' alt='404'></img>
      <p>Sorry, something unexpected happened.</p>
      <p>Please <Link to="/">Click Here</Link> to go back home</p>
    </div>
  )
}
