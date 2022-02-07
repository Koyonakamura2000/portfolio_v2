import './ProjectColumn.css';
import uuid from 'react-uuid';

function ProjectColumn(props) {
    return (
        <section className='project-column'>
            <h3>{props.heading}</h3>
            <p className='project-column-description'>{props.text}</p>
            {props.image && <img src={props.image} alt={props.heading} />}
            {props.image && <p className='image-caption'>{props.caption}</p>}
            {props.unorderedList && <BulletList list={props.unorderedList}></BulletList>}
        </section>
    );
}

function BulletList(props) {
    return (
        <ul className='project-column-ul'>
            {props.list.map((item) => <li key={uuid()}>{item}</li>)}
        </ul>
    );
}

export default ProjectColumn;