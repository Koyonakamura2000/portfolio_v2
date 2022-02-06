import Tags from './Tags.js';
import { Link } from 'react-router-dom';
import './Card.css';

function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.image} alt={props.name}/>
            <div className='info-container'>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div className='info-align-bottom'>
                    <Tags type='Tools' tags={props.tools}></Tags>
                    <Tags type='Role(s)' tags={props.roles}></Tags>
                    <Link className='button' to={props.path}>View</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;