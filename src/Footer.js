import './Footer.css';
import linkedinIcon from './assets/icons/linkedin-square.svg'

function Footer(props) {
    console.log(props.lastEdit);
    return(
        <footer>
            <p>
                Website Last Edited: {props.lastEdit}
            </p>
            <img src={linkedinIcon} alt='Link to LinkedIn'/>
        </footer>
    );
}

export default Footer;