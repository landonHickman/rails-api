import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <>
    <Link to='/'>Home</Link>
    <p> </p>
    <Link to='/About'>About</Link>
    </>
  )
}

export default Nav