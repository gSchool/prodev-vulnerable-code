import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Description from '../Description/Description';
import MainNav from '../MainNav/MainNav';
import NoSqlInjection from '../NoSqlInjection/NoSqlInjection';
import SqlInjection from '../SqlInjection/SqlInjection';
import Xss from '../Xss/Xss';

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
              <Route path="/reflected-xss" component={Xss} />
              <Route path="/stored-xss" component={Xss} />
              <Route path="/sql-injection" component={SqlInjection} />
              <Route path="/nosql-injection" component={NoSqlInjection} />
              <Route component={Description} />
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
