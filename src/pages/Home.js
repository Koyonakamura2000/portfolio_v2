import landingPhoto from '../assets/images/home/landing_photos.jpg'
import './Home.css';

function Home() {
  return (
    <main>
      <article className='column-with-image'>
        <div className='intro'>
          <p>Hi, my name is <big>Koyo Nakamura.</big></p>
          <p>UX designer, researcher, frontend developer.</p>
        </div>
        <div className='image-with-caption'>
          <img className='landing-photo' src={landingPhoto} alt='Oregon Trip - hiking to a lake and entering a cave'/>
          <p className='image-caption'>When I’m not at my desk, you can find me hiking or playing games with my friends!</p>
        </div>
      </article>
      <h1 className='home-h1'>My Work</h1>
      {/* <CardContainer></CardContainer> */}
    </main>
  );
}

export default Home;
