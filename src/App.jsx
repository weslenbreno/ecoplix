import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AppProvider from './Providers/AppProvider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AppProvider>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </AppProvider>
    </div>
  );
}



export default App;
