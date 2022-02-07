import mclMockupWide from '../assets/images/home/commercetools_mockup_wide.jpg';
import ProjectIntro from '../ProjectIntro.js';
import ProjectColumn from '../ProjectColumn.js';
import mindMap from '../assets/images/mcl/mind_map.jpg';
import ResearchQuestion from '../ResearchQuestion.js';
import awsTable from '../assets/images/mcl/aws.jpg';
import v1Prototype from '../assets/images/mcl/v1_prototype.jpg';
import v1Ui from '../assets/images/mcl/v1_ui.jpg';

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
            <ProjectColumn heading='Competitive Analysis' text='I first researched other websites that provide a comparison of services. I found that most websites display the information in one table, which was sometimes overbearing.'
            image={awsTable} caption='comparecloud.in provides a dashboard comparing different cloud services, but the amount of information and technical jargon can be overbearing.'></ProjectColumn>
            <ProjectColumn heading='Initial Prototype' text='Based on analyzing existing platforms and initial discussions with my manager, I designed a prototype that aims to reduce information overload and technical jargon.'
            image={v1Prototype} caption='Instead of displaying all of the services at once, the user is first prompted to select from a list of general categories.'></ProjectColumn>
            <ProjectColumn heading='Usability Testing' text='Participants found that the category names were too confusing (jargon) and some UI elements were unintuitive, preventing them from being able to complete their task.'
            image={v1Ui} caption='Despite the bolded text and darker border, participants had a difficult time distinguishing between selected and unselected tabs.'></ProjectColumn>
        </>
    );
}

export default ModernCommerceLandscape;