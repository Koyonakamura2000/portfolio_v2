import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './pages/NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
