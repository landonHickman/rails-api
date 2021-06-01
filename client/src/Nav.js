import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <>
    <Link to='/'>Home</Link>
    <p> </p>
    <Link to='/RestaurantsForm'>Edit Form</Link>
    </>
  )
}

export default Nav