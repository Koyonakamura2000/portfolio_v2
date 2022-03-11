import Tags from './Tags.js';
import { Link } from 'react-router-dom';
import './Card.css';

function Card(props) {
    let img = props.images[0];
    if(props.mobile) {
        img = props.images[1];
    }
    return (
        <div className='card-container'>
            <img src={img} alt={props.name}/>
            <div className='info-container'>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div className='info-align-bottom'>
                    <Tags type='Tools' tags={props.tools}></Tags>
                    <Tags type='My role(s)' tags={props.roles}></Tags>
                    <Link className='button' to={props.path}>View</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;