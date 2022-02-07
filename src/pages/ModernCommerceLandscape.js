import mclMockupWide from '../assets/images/home/commercetools_mockup_wide.jpg';
import ProjectIntro from '../ProjectIntro.js';
import ProjectColumn from '../ProjectColumn.js';
import mindMap from '../assets/images/mcl/mind_map.jpg';
import ResearchQuestion from '../ResearchQuestion.js';

function ModernCommerceLandscape() {
    return (
        <>
            <ProjectIntro image={mclMockupWide} name='Modern Commerce Landscape'
            description='moderncommercelandscape.com allows technical and non-technical users to explore the modern e-commerce landscape and potentially make business decisions.'
            tools={['Figma', 'HTML/CSS', 'JavaScript']} roles={['Product Design', 'Web Development']} link='https://www.moderncommercelandscape.com'></ProjectIntro>
            <ProjectColumn heading='Context' 
            text='Headless e-commerce allows for flexibility and speed of delivery by ‘mix-and-matching’ a suite of services that focus on specific tasks. However, selecting the right services can be a daunting task due to the technical familiarity required and there being so many options to choose from.'
            image={mindMap} caption='Even this small sector of e-commerce has multiple vendors that specialize in a single branch.'></ProjectColumn>
            <ResearchQuestion text='How can I design a website that helps technical and non-technical people explore the modern e-commerce landscape?'></ResearchQuestion>
        </>
    );
}

export default ModernCommerceLandscape;