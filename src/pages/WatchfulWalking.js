import watchfulMockupWide from '../assets/images/home/318_mockup_wide.jpg';
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

function WatchfulWalking() {
    window.scrollTo(0, 0);
    return (
        <>
            <ProjectIntro image={watchfulMockupWide} name='Watchful Walking'
            description='Watchful Walking is an app that helps University of Washington students safely commute to and from campus by making it easier for them to find other college students nearby.'
            tools={['Figma']} roles={['User Research', 'UX Design']}></ProjectIntro>
            <ProjectColumn heading='Context' 
            text='The area around University of Washington, and especially University Street ("the Ave") is known for its high crime rate.' image={seattleCrime} caption='On an average month, you could expect about 150 crime reportings in the University area. That means that on a typical day, there are 5 crime incidents.'></ProjectColumn>
            <ResearchQuestion color='#6fa8dd' text='How can we help University of Washington students feel safer when navigating to and from campus?'></ResearchQuestion>
            <ProjectColumn heading='User Research' text='We conducted semi-structured interviews with University of Washington students who live in apartments near campus to investigate their emotional and physical experience of commuting.'></ProjectColumn>
            <Participants>
                <Participant image={brian} name='Brian' description='Brian is a 20-year old male undergraduate student who typically walks through the Ave twice a day. He typically walks in the daytime alone and finds the commute to be fairly peaceful.' quotes={["[Walking] feels pretty peaceful, I enjoy it [because] it's quiet and relaxing.", "If I were to encounter [a dangerous situation] I would avoid it... [or] confront it."]}></Participant>
                <Participant image={anna} name='Anna' description='Anna is a 19-year old female undergraduate student who commutes the Ave almost every day. She either walks alone or with one other person and feels nervous walking past people who are yelling and intoxicated.' quotes={["Nervous. Always people yelling and seemingly intoxicated in some form. Never know when someone's going to pull out a knife."]}></Participant>
                <Participant image={danny} name='Danny' description='Danny is a 19-year old male sophomore who commutes every morning and evening and likes to hang out with his friends on the Ave. When out on the Ave until late, he feels safer if he is with his friends.' quotes={["[Commuting] is not bad if it's in the daytime and I keep to myself.", "I don't go to the Ave in super late hours, but if I do I'll feel safer in a group."]}></Participant>
                <Participant image={stephen} name='Stephen' description='Stephen is a 21-year old male undergraduate student who commutes daily to campus. He feels unsafe when walking the Ave because of the large number of homeless people on the streets.' quotes={["There are lots of homeless people hanging out there. I try to walk with my friends if I can, it makes me feel much better."]}></Participant>
            </Participants>
            <ProjectColumn heading='User Modeling - Persona' 
            text='Stemming from the interviews, we found that participants were characterized by two user groups: Max, who is concerned about saving time on commutes, and Meg, who is concerned about her safety when commuting. We chose to focus on Meg because concerns over safety was a common theme among participants.' image={meg}></ProjectColumn>
            <ProjectColumn heading='User Modeling - Journey Map' 
            text='The journey map below details a typical scenario where Meg walks home from campus. The map details interactions with technology to depict design contexts and situations.' image={journeyMap} caption='The journey map allows us to envision when and how users might interact with our design.'></ProjectColumn>
            <ProjectColumn heading='Design Requirements' text='For each design requirement, we considered the action, object, and context associated with them to ensure we do not make too many assumptions' image={designReq} link={[designReqPdf, 'View Full PDF']}></ProjectColumn>
            <ProjectColumn heading='Storyboards' text='I then storyboarded scenarios to better visualize use contexts and prioritize key features for our design.' image={storyboard}></ProjectColumn>
            <ProjectColumn heading='Information Architecture' text='We then translated design requirements into necessary features of the app and placed them as branches of the information architecture tree. Organizing the necessary features in this way facilitated the making of our paper prototype by listing features necessary for each screen.' image={infoArch} link={[infoArchLarge, 'View Full Image']}></ProjectColumn>
        </>
    );
}

export default WatchfulWalking;