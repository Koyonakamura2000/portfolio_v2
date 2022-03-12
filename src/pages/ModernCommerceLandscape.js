import mclMockupWide from '../assets/images/home/commercetools_mockup_wide.jpg';
import ProjectIntro from '../ProjectIntro.js';
import ProjectColumn from '../ProjectColumn.js';
import mindMap from '../assets/images/mcl/mind_map.jpg';
import ResearchQuestion from '../ResearchQuestion.js';
import awsTable from '../assets/images/mcl/aws.jpg';
import v1Prototype from '../assets/images/mcl/v1_prototype.jpg';
import v1Ui from '../assets/images/mcl/v1_ui.jpg';
import ProjectGrid from '../ProjectGrid.js';
import gridLogo from '../assets/images/mcl/grid/website-logo.jpg';
import gridPrompts from '../assets/images/mcl/grid/prompts.jpg';
import gridCategory from '../assets/images/mcl/grid/categoryview.jpg';
import gridTabs from '../assets/images/mcl/grid/tabs.jpg';
import gridSave from '../assets/images/mcl/grid/savelinks.jpg';
import gridContact from '../assets/images/mcl/grid/contact.jpg';
import implementation from '../assets/images/mcl/implementation.png';

function ModernCommerceLandscape() {
    window.scrollTo(0, 0);
    return (
        <>
            <ProjectIntro image={mclMockupWide} duration='June 7th, 2021 - August 13th, 2021' name='Modern Commerce Landscape'
            description='moderncommercelandscape.com allows technical and non-technical users to explore the modern e-commerce landscape and potentially make business decisions.'
            tools={['Figma', 'HTML/CSS', 'JavaScript']} roles={['Product Design', 'Web Development']} link='https://www.moderncommercelandscape.com'></ProjectIntro>
            <ProjectColumn heading='Context' 
            text='Headless e-commerce allows for flexibility and speed of delivery by ‘mix-and-matching’ a suite of services that focus on specific tasks. However, selecting the right services can be a daunting task due to the technical familiarity required and there being so many options to choose from.'
            image={mindMap} caption='Even this small sector of e-commerce has multiple vendors that specialize in a single branch.'></ProjectColumn>
            <ResearchQuestion color='#3f788b' text='How can I design a website that helps technical and non-technical people explore the modern e-commerce landscape?'></ResearchQuestion>
            <ProjectColumn heading='Competitive Analysis' text='I first researched other websites that provide a comparison of services. I found that most websites display the information in one table, which was sometimes overbearing.'
            image={awsTable} caption='comparecloud.in provides a dashboard comparing different cloud services, but the amount of information and technical jargon can be overbearing.'></ProjectColumn>
            <ProjectColumn heading='Initial Prototype' text='Based on analyzing existing platforms and initial discussions with my manager, I designed a prototype that aims to reduce information overload and technical jargon.'
            image={v1Prototype} caption='Instead of displaying all of the services at once, the user is first prompted to select from a list of general categories.' link='https://www.figma.com/file/G8m1HFkXVcqssubHqGAZcO/commercetools?node-id=10%3A0'></ProjectColumn>
            <ProjectColumn heading='Usability Testing' text='Participants found that the category names were too confusing (jargon) and some UI elements were unintuitive, preventing them from being able to complete their task.'
            image={v1Ui} caption='Despite the bolded text and darker border, participants had a difficult time distinguishing between selected and unselected tabs.'></ProjectColumn>
            <ProjectColumn heading='Second Prototype' text='I implemented the following changes to the prototype based on the feedback:' 
            unorderedList={['Beginner-friendly language in prompts and buttons', 'Distinguishing selected and unselected UI with higher contrast and hover feedback', 
            'Keeping calls to action consistent across the whole user experience']} link='https://www.figma.com/file/G8m1HFkXVcqssubHqGAZcO/commercetools?node-id=52%3A237'></ProjectColumn>
            <ProjectGrid items={[{'image': gridLogo, 'caption': 'Website logo emphasizes the horizontal nature of headless e-commerce.'}, 
            {'image': gridPrompts, 'caption': 'Dropdown prompts use non-technical language to minimize specialized vocabulary and accommodate all users.'}, 
            {'image': gridCategory, 'caption': 'For technical users (e.g., developers), the catalogue view shows all of the explorable options.'},
            {'image': gridTabs, 'caption': 'Emphasis with the color disparity and underline highlights the selected tab further. The tab also highlights when hovered over.'},
            {'image': gridSave, 'caption': 'The final screen with summaries for the vendors selected can be shared via saving to a PDF or generating a shareable link.'}, 
            {'image': gridContact, 'caption': 'By making the sharing of contact information optional, I allow all visitors to enjoy the full features while ensuring that those who share are willingly looking for further contact.'}]}></ProjectGrid>
            <ProjectColumn heading='Implementation' text='I implemented the website in plain HTML/CSS/JavaScript and deployed to Google App Engine. Separating data structures in data.js facilitates developer changes, which is essential for the constantly updating e-commerce landscape.'
            image={implementation}></ProjectColumn>
            <ProjectColumn heading='Impact' text='I received positive feedback from commercetools, who appreciated the "demystifying" of technical language and intuitive user flow. Website visitors found the tool useful as a way to "stay in the know" of e-commerce trends and 
            some companies have reached out to be included in the website.'></ProjectColumn>
            <ProjectColumn heading='Reflection' text='If I was to revise or continue this project, I would:' 
            unorderedList={['Connect index.js to a database (e.g., Firebase) rather than editing data.js by hand, as it led to many bugs due to typos.', 'Test designs earlier with paper prototyping as I spent longer than intended on drafting the v1 prototype.', 
            'Structure implementation so that I can be flexible to new changes.']}></ProjectColumn>
        </>
    );
}

export default ModernCommerceLandscape;