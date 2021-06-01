import React from 'react'
import RestaurantForm from './RestaurantForm'

const Restaurant = (props) => {
  const {name, editRestaurant} = props 
  return (
    <>
      <h2>{name}</h2>
      <RestaurantForm {...props} editRestaurant={editRestaurant}/>
    </>
  )
}
export default Restaurant