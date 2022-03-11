import './ResearchQuestion.css';

// change quotation mark colors with props.color
function ResearchQuestion(props) {
    return (
        <section className='research-question'>
            <svg className='quote-top-left' width="5rem" height="5rem" viewBox="0 0 171 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M43.4948 0H1.92345e-06V1.14441e-05H0L1.92345e-06 44.2579V174H43.4948V44.2578L171 44.2578V3.92624e-06L43.4948 0Z" fill={props.color}/>
            </svg>
            <p>{props.text}</p>
            <svg className='quote-bottom-right' width="5rem" height="5rem" viewBox="0 0 171 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M127.505 174L171 174L171 174L171 174L171 129.742L171 0L127.505 -3.80243e-06L127.505 129.742L1.94569e-06 129.742L-1.92345e-06 174L127.505 174Z" fill={props.color}/>
            </svg>
        </section>
    );
}

ResearchQuestion.defaultProps = {
    color: '#CDCDCD'
}

export default ResearchQuestion;