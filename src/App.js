import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Footer from './Footer.js';
import ModernCommerceLandscape from './pages/ModernCommerceLandscape.js';
import NightReflection from './pages/NightReflection.js';
import Symbiosis from './pages/Symbiosis.js';
import WatchfulWalking from './pages/WatchfulWalking';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/'>
            <Route element={<NavBar layout='narrow' />}>
              <Route index element={<Home />}></Route>
              <Route path='about' element={<About />}></Route>
            </Route>
            <Route path='projects/' element={<NavBar />}>
              <Route path='moderncommercelandscape' element={<ModernCommerceLandscape />}></Route>
              <Route path='nightreflection' element={<NightReflection />}></Route>
              <Route path='symbiosis' element={<Symbiosis />}></Route>
              <Route path='watchfulwalking' element={<WatchfulWalking />}></Route>
            </Route>
          </Route>
        </Routes>
      </HashRouter>
      <Footer lastEdit='July 2nd, 2022'></Footer>
    </>
  );
}

export default App;
