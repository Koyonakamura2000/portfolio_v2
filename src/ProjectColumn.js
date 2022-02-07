import './ProjectColumn.css';

function ProjectColumn(props) {
    return (
        <section className='project-column'>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
            {props.image && <img src={props.image} alt={props.heading} />}
            {props.image && <p className='image-caption'>{props.caption}</p>}
        </section>
    );
}

export default ProjectColumn;