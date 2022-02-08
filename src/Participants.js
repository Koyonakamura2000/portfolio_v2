import './Participants.css';
import Participant from './Participant.js';
import uuid from 'react-uuid';

function Participants(props) {
    return (
        <section className='participants-column'>
            {props.children}
        </section>
    );
}

export default Participants;