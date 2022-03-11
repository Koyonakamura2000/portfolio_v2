import landingPhoto from '../assets/images/home/landing_photos.jpg'
import './Home.css';
import Card from '../Card.js';
import mclMockup from '../assets/images/home/commercetools_mockup.png';
import mclMockupWide from '../assets/images/home/commercetools_mockup_wide.jpg';
import reflectionMockup from '../assets/images/home/reflection_mockup.png';
import reflectionMockupWide from '../assets/images/home/reflection_mockup_wide.jpg';
import symbiosisMockup from '../assets/images/home/symbiosis_mockup.png';
import symbiosisMockupWide from '../assets/images/home/symbiosis_mockup_wide.jpg';
import watchfulMockup from '../assets/images/home/318_mockup.jpg';
import watchfulMockupWide from '../assets/images/home/318_mockup_wide.jpg';
import OtherWork from '../OtherWork.js';
import MiniCard from '../MiniCard.js';
import crApi from '../assets/images/home/other-work/cr_api_flask.jpg';
import cevans from '../assets/images/home/other-work/cevans.jpg';
import cevans_full from '../assets/images/home/other-work/cevans_full.jpg';

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
        <Card images={[symbiosisMockup, symbiosisMockupWide]} mobile={isMobile} name='Symbiosis' 
        description='Using gamification to inspire younger adults to interact with and appreciate their local environment.' 
        tools={['Figma', 'Miro']} roles={['User Research', 'UX Design', 'UI Design']} path='/projects/symbiosis'></Card>
        <hr />
        <Card images={[reflectionMockup, reflectionMockupWide]} mobile={isMobile} name='Designing for Night-Time Reflection' 
        description='Published research paper on how to support people reflecting at night.' 
        tools={['Miro', 'Google Forms']} roles={['User Research']} path='/projects/nightreflection'></Card>
        <hr />
        <Card images={[watchfulMockup, watchfulMockupWide]} mobile={isMobile} name='Watchful Walking' 
        description='Designing an app that helps University of Washington students safely commute to and from campus.' 
        tools={['Figma']} roles={['User Research, UX Design']} path='/projects/watchfulwalking'></Card>
        <hr />
      </div>
      <p className='other-work-intro'>Other things I've worked on...</p>
      <OtherWork>
        <MiniCard name='Clash Royale Deck Generator' description='React project using Clash Royale’s API to generate deck suggestions based on the current leaderboard and the website user’s card levels.' tools={['React', 'Clash Royale API', 'Vercel']} roles={['Web Development']}>
          {isMobile ? <iframe width={(window.innerWidth*0.8)} height={window.innerWidth * .5} src="https://www.youtube.com/embed/jbWa_X3HyBY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <iframe width='560' height='315' src="https://www.youtube.com/embed/jbWa_X3HyBY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
        </MiniCard>
        <hr />
        <MiniCard name='Clash Royale Deck Suggestions API' description='In order to avoid hitting the rate limit in high traffic, I set up a Flask API connected to Firebase to periodically update the data, rather than calling the Clash Royale API every time.' image={crApi} tools={['Python Flask', 'Google Firebase']} roles={['Web Development']}></MiniCard>
        <hr />
        <MiniCard name='Twitter Manga Translator' description='Allows English-Japanese translators to more easily find and translate manga tweets by Japanese artists and reply with translations.' tools={['Python Flask', 'Twitter API']} roles={['Web Development']}>
          {isMobile ? <iframe width={(window.innerWidth*0.8)} height={window.innerWidth * .5} src="https://www.youtube.com/embed/YZHg3Ll11Mk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <iframe width='560' height='315' src="https://www.youtube.com/embed/YZHg3Ll11Mk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
        </MiniCard>
        <hr />
        <MiniCard name='C Evans Website Redesign' description='Redesigned the C Evans Consulting website, incorporating feedback from focus group sessions into the design.' image={cevans} tools={['Python Flask', 'Google Firebase']} roles={['UI Design']} fullImage={cevans_full}></MiniCard>
      </OtherWork>
    </main>
  );
}

export default Home;
