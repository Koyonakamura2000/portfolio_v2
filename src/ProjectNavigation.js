import './ProjectNavigation.css';
import { HashLink as Link } from 'react-router-hash-link';

function ProjectNavigation(props) {
    console.log(props.links);
    let linksAry = [];
    // [["User Research", "userResearch"], ...]
    for(let link in props.links) {
        linksAry.push([link, props.links[link]]);
    }
    console.log(linksAry);
    return (
        <div className='project-links'>
            {linksAry.map((linkAry) => <Link key={linkAry[1]} to={'#' + linkAry[1]}>{linkAry[0]}</Link>)}
        </div>
    );
}

export default ProjectNavigation;