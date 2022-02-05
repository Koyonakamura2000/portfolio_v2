import uuid from 'react-uuid';

// using react-uuid to generate unique key for each tag, rather than index 
function Tags(props) {
    return (
        <div className='tags-container'>
            <h4 className='tag-name'>{props.type}</h4>
            <div className='tags'>
                {props.tags.map((tag) => <h5 className='tag' key={uuid()}>{tag}</h5>)}
            </div>
        </div>
    );
}

export default Tags;