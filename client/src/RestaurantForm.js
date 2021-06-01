import axios from 'axios'
import React, {useState} from 'react'

const RestaurantForm = (props) => {
  const {id, editRestaurant, addRestaurant} = props
  const [name, setName] = useState(props.name ? props.name : '')
 


  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if(id){
        let res = await axios.put(`/api/restaurants/${id}`, {name})
        editRestaurant(res.data)
      } else {
        let res = await axios.post('/api/restaurants', {name})
        addRestaurant(res.data)
        setName('')
      }
    } catch (err) {
      alert('err check console')
      console.log(err)
    }
  }

  return (
    
      <div>
        <h3>{id ? 'Edit Name' : 'Add Name'}</h3>
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e)=>setName(e.target.value)}/>
          <button>{id ? 'Edit' : 'Add'}</button>
        </form>
      </div>
    
  )
}
export default RestaurantForm