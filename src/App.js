import { useState } from 'react';
import './App.css';
import { Home } from './pages/home/home';
import { Brand } from './pages/brand/brand';
import { Creator } from './pages/creator/creator';

function App() {

  const [selectedComponent, setSelectedComponent] = useState('home');

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="App">
       <div>
       {selectedComponent === 'home' && <Home onButtonClick={handleButtonClick} />}
       </div>
       <div>{selectedComponent === 'brand' && <Brand />}</div>
       <div> {selectedComponent === 'creator' && <Creator />}</div>
    </div>
  );
}

export default App;
