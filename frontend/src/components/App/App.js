import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Description from '../Description/Description';
import MainNav from '../MainNav/MainNav';
import SqlInjection from '../SqlInjection/SqlInjection';

import logo from '../../combined-logos.png';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Vulnerable Code Examples
        </header>
        <main className="App-main">
          <MainNav />
          <div className="App-content">
            <Switch>
              <Route path="/sql-injection" component={SqlInjection} />
              <Route component={Description} />
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
