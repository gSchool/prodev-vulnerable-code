import { useState } from 'react';
import logo from './combined-logos.png';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <input type="text" value={link} onChange={e => setLink(e.target.value)} />
        { link.trim() ?
          <a href={link}>Click me!</a> :
          <span>Click me!</span>
        }
        
      </main>
    </div>
  );
}

export default App;
