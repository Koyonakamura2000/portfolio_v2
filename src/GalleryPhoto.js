import './GalleryPhoto.css';

function GalleryPhoto(props) {
    return (
        <div className='gallery-photo'>
            <img src={props.image} alt={props.title}></img>
            <div className='gallery-photo-text'>
                <h3>{props.date}</h3>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default GalleryPhoto;