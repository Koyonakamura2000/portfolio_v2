import './ProjectIntro.css';
import Tags from './Tags.js';

// "Visit website" link only shows when link prop is provided
function ProjectIntro(props) {
    return (
        <>
            <img className='project-intro-image' src={props.image} alt={props.name}/>
            <div className='project-intro'>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <Tags type='Tools' tags={props.tools}></Tags>
                <Tags type='My Role(s)' tags={props.roles}></Tags>
                {props.link && <a className='button' href={props.link} target='_blank' rel='noreferrer'>Visit website</a>} 
            </div>
        </>
    );
}

export default ProjectIntro;