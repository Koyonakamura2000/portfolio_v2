import './AboutIntro.css';
import linkedin from './assets/images/about/socials/linkedin.png';
import github from './assets/images/about/socials/github.png';
import youtube from './assets/images/about/socials/youtube.png';
import selfPortrait from './assets/images/about/vakker_portrait.png';

function AboutIntro() {
    return (
        <section className='about-intro'>
            <div className='about-portrait'><img src={selfPortrait} alt='Koyo self portrait'/></div>
            <div className='about-right-column'>
                <p>I study Human-Centered Design & Engineering at the University of Washington, graduating in June 2022. I am interested in research, design, and web programming. Outside of work, I like to go hiking, play soccer, or play video games with my friends on Discord.</p>
                <div className='socials'>
                    <a href='https://www.linkedin.com/in/koyonakamura/' target='_blank' rel='noreferrer'><img src={linkedin} alt='LinkedIn'/></a>
                    <a href='https://github.com/Koyonakamura2000' target='_blank' rel='noreferrer'><img src={github} alt='Github'/></a>
                    <a href='https://www.youtube.com/channel/UCiD7Wb-eQZ08a4_XFT3v2Hg' target='_blank' rel='noreferrer'><img src={youtube} alt='YouTube'/></a>
                </div>
            </div>
        </section>
    );
}

export default AboutIntro;