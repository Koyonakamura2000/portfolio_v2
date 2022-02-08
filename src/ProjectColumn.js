import './ProjectColumn.css';
import uuid from 'react-uuid';

function ProjectColumn(props) {
    return (
        <section className='project-column'>
            <h3>{props.heading}</h3>
            {props.text && <p className='project-column-description'>{props.text}</p>}
            {props.image && <img src={props.image} alt={props.heading} />}
            {props.image && <p className='image-caption'>{props.caption}</p>}
            {props.unorderedList && <BulletList list={props.unorderedList}></BulletList>}
            {props.labeledList && <LabeledList list={props.labeledList}></LabeledList>}
            {props.link && <a className='button' href={props.link} target='_blank' rel='noreferrer'>Visit website</a>}
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