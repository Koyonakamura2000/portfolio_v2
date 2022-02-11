import './Footer.css';
import linkedinIcon from './assets/icons/linkedin-square.svg'

function Footer(props) {
    return(
        <footer>
            <p>
                Website Last Edited: {props.lastEdit}
            </p>
            <a href='https://www.linkedin.com/in/koyonakamura' target='_blank' rel='noreferrer'><img src={linkedinIcon} alt='Link to LinkedIn'/></a>
        </footer>
    );
}

export default Footer;