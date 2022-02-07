import './ResearchQuestion.css';

function ResearchQuestion(props) {
    return (
        <div className='research-question'>
            <p>{props.text}</p>
        </div>
    );
}

export default ResearchQuestion;