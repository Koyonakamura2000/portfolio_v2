import './GalleryGrid.css';

function GalleryGrid(props) {
    return (
        <div class='gallery-grid'>
            {props.children}
        </div>
    );
}

export default GalleryGrid;