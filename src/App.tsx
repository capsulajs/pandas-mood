import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Home from './Home';
import Publish from './Publish/Publish';
import Dashboard from './Dashboard/Dashboard';

// TODO: use components after they will be created
const Login = () => <div>Login</div>;

class App extends React.Component {
  public render() {
    return <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/publish">Publish</Link>
          <Link to="/dashboard">Dashboard</Link>
        </header>
        <div className="Content">
          <Route exact={true} path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/publish" component={Publish}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </div>
    </Router>;
  }
}

export default App;
