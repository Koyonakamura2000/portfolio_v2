import './MiniCard.css';
import Tags from './Tags.js';

function MiniCard(props) {
    return (
        <div className='mini-card'>
            {props.children && <div className='mini-card-media-container'>{props.children}</div>}
            {!props.children && props.image && <img src={props.image} alt={props.name}/>}
            <div className='mini-card-details'>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                </div>
                <Tags type='Tools' tags={props.tools}></Tags>
                <Tags type='Role(s)' tags={props.roles}></Tags>
            </div>
            {props.fullImage && <a className='button' href={props.fullImage} target='_blank' rel='noreferrer'>View Full Image</a>}
        </div>
    );
}

export default MiniCard;