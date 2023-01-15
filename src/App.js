import { Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

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
