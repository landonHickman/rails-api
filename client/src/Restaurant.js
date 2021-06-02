import React, {useState} from 'react'
import RestaurantForm from './RestaurantForm'

const Restaurant = (props) => {
  const {id, name, editRestaurant, deleteRestaurant} = props 
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <h2>{name}</h2>
      <button onClick={()=>{setShowForm(!showForm)}}>Edit Form</button>
      <button onClick={()=>deleteRestaurant(id)}>Delete</button>
      {showForm && <RestaurantForm {...props} editRestaurant={editRestaurant}/>}
      <hr/>
    </>
  )
}
export default Restaurant