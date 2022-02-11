import './GalleryGrid.css';

function GalleryGrid(props) {
    return (
        <div className='gallery-grid'>
            {props.children}
        </div>
    );
}

export default GalleryGrid;