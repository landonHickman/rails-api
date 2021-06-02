import React, {useState, useEffect} from 'react'
import axios from 'axios'


const About = (props) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(()=>{
    getRestaurants()
  }, [])

  const getRestaurants = async () => {
    try {
      let res = await axios.get('/api/restaurants')
      console.log(res.data)
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
      return (
      <div key={res.id}>
        
        <h2>{res.name}</h2>
        <h3>{res.about}</h3>
        <hr/>
      </div>

      )
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
    <h1>About Restaurants</h1>
    {renderRestaurants()}
    </div>
  )
}
export default About