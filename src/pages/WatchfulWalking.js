import watchfulMockupVeryWide from '../assets/images/home/318_mockup_verywide.jpg'
import ProjectIntro from '../ProjectIntro.js';
import ProjectColumn from '../ProjectColumn.js';
import ResearchQuestion from '../ResearchQuestion.js';
import seattleCrime from '../assets/images/watchful/seattle-crime.jpg';
import anna from '../assets/images/watchful/anna.jpg';
import brian from '../assets/images/watchful/brian.jpg';
import danny from '../assets/images/watchful/danny.jpg';
import stephen from '../assets/images/watchful/stephen.jpg';
import meg from '../assets/images/watchful/meg-persona.jpg';
import Participant from '../Participant';
import Participants from '../Participants';
import journeyMap from '../assets/images/watchful/journey-map.jpg';
import designReq from '../assets/images/watchful/design-req.jpg';
import designReqPdf from '../assets/pdfs/watchful/design_req.pdf';
import storyboard from '../assets/images/watchful/storyboard.jpg';
import infoArch from '../assets/images/watchful/infoarch.jpg';
import infoArchLarge from '../assets/images/watchful/infoarch-large.jpg';
import paperProto from '../assets/images/watchful/paperproto.jpg';
import wireframe from '../assets/images/watchful/wireframe.jpg';
import wireframePdf from '../assets/pdfs/watchful/wireframes.pdf';
import hifi from '../assets/images/watchful/hifi.jpg';
import hifiPdf from '../assets/pdfs/watchful/hifi.pdf';
import ProjectNavigation from '../ProjectNavigation';

function WatchfulWalking() {
    window.scrollTo(0, 0);
    return (
        <>
            <ProjectNavigation links={{'Context': 'context', 'Research Question': 'researchQuestion', 'User Research': 'userResearch', 'User Modeling': 'userModeling', 'Design Requirements': 'designRequirements', 'Storyboards': 'storyboards', 'Evaluative test': 'evaluativeTest', 'Test Findings': 'testFindings', 'Wireframes': 'wireframes', 'High-Fidelity Prototype': 'hifi'}}></ProjectNavigation>
            <ProjectIntro image={watchfulMockupVeryWide} name='Watchful Walking'
            description='Watchful Walking is an app that helps University of Washington students safely commute to and from campus by making it easier for them to find other college students nearby.'
            tools={['Figma']} duration='September 25th, 2019 - December 6th, 2019' roles={['User Research', 'UX Design']}></ProjectIntro>
            <ProjectColumn id='context' heading='Context' 
            text='The area around University of Washington, and especially University Street ("the Ave") is known for its high crime rate.' image={seattleCrime} caption='On an average month, you could expect about 150 crime reportings in the University area. That means that on a typical day, there are 5 crime incidents.'></ProjectColumn>
            <ResearchQuestion id='researchQuestion' color='#6fa8dd' text='How can we help University of Washington students feel safer when navigating to and from campus?'></ResearchQuestion>
            <ProjectColumn id='userResearch' heading='User Research' text='We conducted semi-structured interviews with University of Washington students who live in apartments near campus to investigate their emotional and physical experience of commuting.'></ProjectColumn>
            <Participants>
                <Participant image={brian} name='Brian' description='Brian is a 20-year old male undergraduate student who typically walks through the Ave twice a day. He typically walks in the daytime alone and finds the commute to be fairly peaceful.' quotes={["[Walking] feels pretty peaceful, I enjoy it [because] it's quiet and relaxing.", "If I were to encounter [a dangerous situation] I would avoid it... [or] confront it."]}></Participant>
                <Participant image={anna} name='Anna' description='Anna is a 19-year old female undergraduate student who commutes the Ave almost every day. She either walks alone or with one other person and feels nervous walking past people who are yelling and intoxicated.' quotes={["Nervous. Always people yelling and seemingly intoxicated in some form. Never know when someone's going to pull out a knife."]}></Participant>
                <Participant image={danny} name='Danny' description='Danny is a 19-year old male sophomore who commutes every morning and evening and likes to hang out with his friends on the Ave. When out on the Ave until late, he feels safer if he is with his friends.' quotes={["[Commuting] is not bad if it's in the daytime and I keep to myself.", "I don't go to the Ave in super late hours, but if I do I'll feel safer in a group."]}></Participant>
                <Participant image={stephen} name='Stephen' description='Stephen is a 21-year old male undergraduate student who commutes daily to campus. He feels unsafe when walking the Ave because of the large number of homeless people on the streets.' quotes={["There are lots of homeless people hanging out there. I try to walk with my friends if I can, it makes me feel much better."]}></Participant>
            </Participants>
            <ProjectColumn id='userModeling' heading='User Modeling - Persona' 
            text='Stemming from the interviews, we found that participants were characterized by two user groups: Max, who is concerned about saving time on commutes, and Meg, who is concerned about her safety when commuting. We chose to focus on Meg because concerns over safety was a common theme among participants.' image={meg}></ProjectColumn>
            <ProjectColumn heading='User Modeling - Journey Map' 
            text='The journey map below details a typical scenario where Meg walks home from campus. The map details interactions with technology to depict design contexts and situations.' image={journeyMap} caption='The journey map allows us to envision when and how users might interact with our design.'></ProjectColumn>
            <ProjectColumn id='designRequirements' heading='Design Requirements' text='For each design requirement, we considered the action, object, and context associated with them to ensure we do not make too many assumptions' image={designReq} link={[designReqPdf, 'View Full PDF']}></ProjectColumn>
            <ProjectColumn id='storyboards' heading='Storyboards' text='I then storyboarded scenarios to better visualize use contexts and prioritize key features for our design.' image={storyboard}></ProjectColumn>
            <ProjectColumn heading='Information Architecture' text='We then translated design requirements into necessary features of the app and placed them as branches of the information architecture tree. Organizing the necessary features in this way facilitated the making of our paper prototype by listing features necessary for each screen.' image={infoArch} link={[infoArchLarge, 'View Full Image']}></ProjectColumn>
            <ProjectColumn id='evaluativeTest' heading='Paper Prototype Evaluative Test' text='We first made a paper prototype to conduct evaluative tests with potential users. We measured how long it took to complete the following three key tasks:' unorderedList={['Find and contact a friend using the map', 'Plan a trip from the home screen', 'Contact emergency services (911)']}image={paperProto}></ProjectColumn>
            <ProjectColumn id='testFindings' heading='Evaluative Test Findings' unorderedList={['Participants were confused by the meaning of icons', 'Participants suggested adding profile pictures to make it clear that the dots are people', 'Participants felt that the emergency contact feature might not be necessary because such as situation is extremely rare']}></ProjectColumn>
            <ProjectColumn id='wireframes' heading='Wireframes' text='Before designing the high-fidelity prototype of our app, we first made wireframes to finalize screens we need to include in our app.' image={wireframe} link={[wireframePdf, "View Full PDF"]}></ProjectColumn>
            <ProjectColumn id='hifi' heading='High Fidelity Prototype' text='We designed the final prototype on Figma, highlighting the following key features:' unorderedList={['Ability to quickly call for emergency with a swipe feature on the home screen', 'Plan trips by considering light levels, number of people in proximity, and past crime records', 'Friend list of people in proximity to reach out to for companionship']} image={hifi} link={[hifiPdf, "View Full PDF"]}></ProjectColumn>
        </>
    );
}

export default WatchfulWalking;