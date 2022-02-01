import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
            <Outlet />
        </>
    );
  }
  
  export default NavBar;
  