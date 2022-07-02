import { Outlet, Link, NavLink } from "react-router-dom";
import resumePdf from './assets/pdfs/01_2022_UX_Resume.pdf';
import './NavBar.css';

function NavBar(props) {
    let name = "Koyo";
    let navBarClass = 'nav-bar';
    if(window.innerWidth >= 1024) {
        name = "Koyo Nakamura";
    };

    if(props.layout === 'narrow') {
        navBarClass = 'nav-bar-narrow';
    }

    return (
        <>
            <nav className={navBarClass}>
                <Link className='logo' to='/'>{name}</Link>
                <div className='nav-links'>
                    <NavLink exact='true' className={(state) => state.isActive ? 'nav-selected' : 'nav-unselected'} to='/'>Home</NavLink>
                    <NavLink className={(state) => state.isActive ? 'nav-selected' : 'nav-unselected'} to='/about'>About</NavLink>
                    <a className='nav-resume-link' href={resumePdf} rel='noreferrer' target='_blank'>Resume</a>
                </div>
            </nav>
            <div className='spacer'></div>
            <Outlet />
        </>
    );
  }
  
  NavBar.defaultProps = {
      type: 'project'
  }

  export default NavBar;
  