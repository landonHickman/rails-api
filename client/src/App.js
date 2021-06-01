
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Restaurants from './Restaurants';


function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Restaurants}/>
        
      </Switch>
    </>
  );
}

export default App;
