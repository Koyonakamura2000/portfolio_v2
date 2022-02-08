import uuid from 'react-uuid';
import './Participant.css';

function Participant(props) {
    console.log(props);
    return (
        <div className='participant'>
            <div className='participant-left-column'>
                <img src={props.image} alt='persona'/>
                <h3>{props.name}</h3>
            </div>
            <div className='participant-right-column'>
                <p>{props.description}</p>
                <div className='participant-quotes'>
                    {props.quotes.map((quote) => <p key={uuid()}>"{quote}"</p>)}
                </div>
            </div>
        </div>
    );
}

export default Participant;