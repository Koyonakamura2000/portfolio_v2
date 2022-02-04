import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './pages/NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer lastEdit='February 3rd, 2022'></Footer>
    </>
  );
}

export default App;
