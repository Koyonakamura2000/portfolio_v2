import './ProjectGrid.css';
import uuid from 'react-uuid';

function ProjectGrid(props) {
    return (
        <section className='project-grid'>
            {props.items.map((elements) => 
            <div key={uuid()}>
                <img src={elements.image} alt='UI screenshot'/>
                <p className='image-caption-mini'>{elements.caption}</p>
            </div>)}
        </section>
    );
}

export default ProjectGrid;