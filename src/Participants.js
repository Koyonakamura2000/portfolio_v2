import './Participants.css';

function Participants(props) {
    return (
        <section className='participants-column'>
            {props.children}
        </section>
    );
}

export default Participants;