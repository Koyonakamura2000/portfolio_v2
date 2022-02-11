import landingPhoto from '../assets/images/home/landing_photos.jpg'
import './Home.css';
import Card from '../Card.js';
import mclMockup from '../assets/images/home/commercetools_mockup.png';
import mclMockupWide from '../assets/images/home/commercetools_mockup_wide.jpg';
import reflectionMockup from '../assets/images/home/reflection_mockup.png';
import reflectionMockupWide from '../assets/images/home/reflection_mockup_wide.jpg';
import watchfulMockup from '../assets/images/home/318_mockup.png';
import watchfulMockupWide from '../assets/images/home/318_mockup_wide.jpg';
import symbiosisMockup from '../assets/images/home/symbiosis_mockup.png';
import symbiosisMockupWide from '../assets/images/home/symbiosis_mockup_wide.jpg';

function Home() {
  let isMobile = true;
  if(window.innerWidth >= 1024) {
    isMobile = false;
  }

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
      <div className='cards-container'>
        <Card images={[mclMockup, mclMockupWide]} mobile={isMobile} name='Modern Commerce Landscape' 
        description='A website that helps businesses navigate the modern e-commerce landscape and find services that suit their business needs.'
        tools={['Figma', 'HTML/CSS', 'JavaScript']} roles={['Product Design', 'Web Development']} path='/projects/moderncommercelandscape'></Card>
        <hr />
        <Card images={[reflectionMockup, reflectionMockupWide]} mobile={isMobile} name='Designing for Night-Time Reflection' 
        description='Published research paper on how to support people reflecting at night.' 
        tools={['Miro', 'Google Forms']} roles={['User Research']} path='/projects/nightreflection'></Card>
        <hr />
        <Card images={[symbiosisMockup, symbiosisMockupWide]} mobile={isMobile} name='Symbiosis' 
        description='Using gamification to inspire younger adults to interact with and appreciate their local environment.' 
        tools={['Figma', 'Miro']} roles={['User Research', 'UX Design', 'UI Design']} path='/projects/symbiosis'></Card>
        <hr />
      </div>
    </main>
  );
}

export default Home;
