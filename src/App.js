import {Redirect, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Products from './components/Products';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
 
      <Route path='/' exact>
        <Login />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>

      <Route path='/products'>
        <Products />
      </Route>
      
    </div>
  );
}

export default App;
