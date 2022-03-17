import './ProjectColumn.css';
import uuid from 'react-uuid';

function ProjectColumn(props) {
    return (
        <section className='project-column' id={props.id}>
            <h3>{props.heading}</h3>
            {props.text && <p className='project-column-description'>{props.text}</p>}
            {props.unorderedList && <BulletList list={props.unorderedList}></BulletList>}
            {props.labeledList && <LabeledList list={props.labeledList}></LabeledList>}
            {props.image && <img src={props.image} alt={props.heading} />}
            {props.caption && <p className='project-image-caption'>{props.caption}</p>}
            {props.link && <a className='button' href={props.link[0]} target='_blank' rel='noreferrer'>{props.link[1]}</a>}
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

function LabeledList(props) {
    return (
        <div className='labeled-list'>
            {props.list.map((info) => 
            <div key={uuid()}>
                <h2 className='labeled-list-heading'>{info.heading}</h2>
                <p>{info.text}</p>
            </div>)}
        </div>
    );
}

export default ProjectColumn;