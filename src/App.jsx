import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Cube, GithubLogo, Heart, Horse, IconContext } from 'phosphor-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import { ShopContextProvider } from './Context/Shop_context';

// npm install --save phosphor-react

function App() {
  const [count, setCount] = useState(0);

  return (
    <IconContext.Provider
      value={{
        color: 'limegreen',
        size: 320,
        weight: 'bold',
        mirrored: false,
        cursor: 'pointer',
      }}
    >
      <div className="body">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </IconContext.Provider>
  );
}

export default App;
