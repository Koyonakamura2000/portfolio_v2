import { Outlet, Link, NavLink } from "react-router-dom";
import resumePdf from './assets/pdfs/01_2022_UX_Resume.pdf';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <nav className='nav-bar'>
                <Link className='logo' to='/'>Koyo Nakamura</Link>
                <div className='nav-links'>
                    <NavLink exact='true' className={(state) => state.isActive ? 'nav-selected' : 'nav-unselected'} to='/'>My Work</NavLink>
                    <NavLink className={(state) => state.isActive ? 'nav-selected' : 'nav-unselected'} to='/about'>About</NavLink>
                    <a className='nav-resume-link' href={resumePdf} rel='noreferrer' target='_blank'>Resume</a>
                </div>
            </nav>
            <Outlet />
        </>
    );
  }
  
  export default NavBar;
  