import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import Restaurant from './Restaurant';

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
  
  const renderRestaurants = () => {
    if(restaurants.length === 0){
      return <p>No Restaurants</p>
    }
    return restaurants.map (res => {
      return <Restaurant key={res.id} {...res} />
    })
  }

  return (
    <div className="App">
      <h1>Restaurants</h1>
      {renderRestaurants()}
    </div>
  );
}

export default Restaurants;
