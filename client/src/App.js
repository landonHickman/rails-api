
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Restaurants from './Restaurants';
import Nav from './Nav';
import About from './About';


function App() {

  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Restaurants}/>
        <Route exact path='/About' component={About}/>
      </Switch>
    </>
  );
}

export default App;
