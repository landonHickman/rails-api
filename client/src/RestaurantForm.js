import axios from 'axios'
import React, {useState} from 'react'

const RestaurantForm = (props) => {
  const {id, editRestaurant, addRestaurant} = props
  const [name, setName] = useState(props.name ? props.name : '')
 


  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if(id){
        console.log(id)
        let res = await axios.put(`/api/restaurants/${id}`, {name})
        
        console.log('hit edit', res.data)
        editRestaurant(res.data)
        console.log('after edit', res.data)
      } else {
        let res = await axios.post('/api/restaurants', {name})
        console.log(res.data)
        addRestaurant(res.data)
      }
    } catch (err) {
      alert('err check console')
      console.log(err)
    }
    setName('')
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