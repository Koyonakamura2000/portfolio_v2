import print3d from '../assets/images/about/3d_print.jpg';
import aquarium from '../assets/images/about/aquarium.jpg';
import hurricaneRidge from '../assets/images/about/brendon_hurricane_ridge.jpg';
import cave from '../assets/images/about/cave.jpg';
import mountain from '../assets/images/about/koyo_on_mountain.jpg';
import osaka from '../assets/images/about/osaka_castle.jpg';
import shogi from '../assets/images/about/shogi.jpg';
import smash from '../assets/images/about/smash.jpg';
import tomatoBasil from '../assets/images/about/tomato_basil.jpg';
import GalleryGrid from '../GalleryGrid.js';
import GalleryPhoto from '../GalleryPhoto.js';
import AboutIntro from '../AboutIntro.js';

// 1 = top left, 9 = bottom right in 3x3 grid
function About() {
    return (
      <>
        <AboutIntro></AboutIntro>
        <GalleryGrid>
          <GalleryPhoto image={mountain} date='August 5th, 2021' title='Haleakala National Park' text="While I spend the majority of my time indoors, I love going out on hikes and being surrounded by nature every now and then."></GalleryPhoto>
          <GalleryPhoto image={cave} date='August 3rd, 2019' title='Hong Kong' text='Exploring the many islands of Hong Kong was probably the best outdoor experience in my life so far - so many caves to explore :)'></GalleryPhoto>
          <GalleryPhoto image={hurricaneRidge} date='August 30th, 2021' title='Hurricane Ridge' text='This picture was actually taken by my friend who went on the trip with me, and I just had to share because it is so good.'></GalleryPhoto>
          <GalleryPhoto image={aquarium} date='December 19th, 2021' title='Shinagawa Aquarium' text="I've loved aquariums ever since I was a child. I could spend all day in them if I wanted..."></GalleryPhoto>
          <GalleryPhoto image={osaka} date='December 26th, 2021' title='Osaka Castle' text="I go to Japan pretty often since I have some friends and relatives there. This time, my friend at Osaka University took me sightseeing :D"></GalleryPhoto>
          <GalleryPhoto image={shogi} date='December 29th, 2021' title='Shogi' text="I like playing shogi and chess - though I'm just about average at either of them."></GalleryPhoto>
          <GalleryPhoto image={smash} date='January 15th, 2021' title='Melee Tournament' text="Super Smash Bros. Melee is probably how I became friends with most people I know. I think I'm pretty good at it if you ever want to play!"></GalleryPhoto>
          <GalleryPhoto image={tomatoBasil} date='January 23rd, 2021' title='Cooking' text="Lately I've been learning how to cook since I probably shouldn't be eating fast food all the time..."></GalleryPhoto>
          <GalleryPhoto image={print3d} date='February 2nd, 2021' title='3D Printing' text="I like challenging myself to learn new things. Recently, I 3D-printed some pencil holders!"></GalleryPhoto>
        </GalleryGrid>
      </>
    );
  }
  
  export default About;
  