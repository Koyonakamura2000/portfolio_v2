import print3d from '../assets/images/about/3d_print.jpg';
import aquarium from '../assets/images/about/aquarium.jpg';
import hurricaneRidge from '../assets/images/about/brendon_hurricane_ridge.jpg';
import cave from '../assets/images/about/cave.jpg';
import craterLake from '../assets/images/about/koyo_crater_lake.jpg';
import mountain from '../assets/images/about/koyo_on_mountain.jpg';
import osaka from '../assets/images/about/osaka_castle.jpg';
import shogi from '../assets/images/about/shogi.jpg';
import smash from '../assets/images/about/smash.jpg';
import tomatoBasil from '../assets/images/about/tomato_basil.jpg';
import GalleryGrid from '../GalleryGrid.js';
import GalleryPhoto from '../GalleryPhoto.js';

// 1 = top left, 9 = bottom right in 3x3 grid
function About() {
    return (
      <GalleryGrid>
        <GalleryPhoto position='1' image={mountain}></GalleryPhoto>
      </GalleryGrid>
    );
  }
  
  export default About;
  