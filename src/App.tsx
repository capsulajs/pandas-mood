import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

const PageA = () => <div>Page A</div>;
const PageB = () => <div>Page B</div>;
const PageC = () => <div>Page C</div>;

class App extends React.Component {
  public render() {
    return <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/">Page A</Link>
          <Link to="/publish">Page B</Link>
          <Link to="/auth">Page C</Link>
        </header>
        <div className="Content">
          <Route exact path="/" component={PageA}/>
          <Route path="/publish" component={PageB}/>
          <Route path="/auth" component={PageC}/>
        </div>
      </div>
    </Router>;
  }
}

export default App;
