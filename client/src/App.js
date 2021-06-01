
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Restaurants from './Restaurants';
import Nav from './Nav';
import RestaurantForm from './RestaurantForm';


function App() {

  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Restaurants}/>
        <Route exact path='/RestaurantForm' component={RestaurantForm}/>
      </Switch>
    </>
  );
}

export default App;
