import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import Restaurant from './Restaurant';
import RestaurantForm from './RestaurantForm';

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(()=>{
    getRestaurants()
  }, [])

  const getRestaurants = async () => {
    try {
      let res = await axios.get('/api/restaurants')
      setRestaurants(res.data)
    } catch (err){
      alert('err occured check console')
      console.log('look here', err)
    }
  }

  const addRestaurant = (res) => {
    let updatedRestaurant = [res, ...restaurants]
    setRestaurants(updatedRestaurant)
  }

  const editRestaurant = (res) => {
    let updatedRestaurant = restaurants.map(r => r.id === res.id ? res.id : r)
    setRestaurants(updatedRestaurant)
  }
  
  const renderRestaurants = () => {
    if(restaurants.length === 0){
      return <p>No Restaurants</p>
    }
    return restaurants.map (res => {
      return <Restaurant key={res.id} {...res} editRestaurant={editRestaurant}/>
    })
  }

  return (
    <div className="App">
      <h1>Restaurants</h1>
      <RestaurantForm addRestaurant={addRestaurant}/>
      {renderRestaurants()}
    </div>
  );
}

export default Restaurants;
