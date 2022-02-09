import ProjectIntro from "../ProjectIntro.js";
import symbiosisWide from '../assets/images/home/symbiosis_mockup_wide.jpg';
import ProjectColumn from "../ProjectColumn.js";
import ResearchQuestion from "../ResearchQuestion.js";
import Participants from "../Participants.js";
import Participant from "../Participant.js";
import forestHealth from '../assets/images/symbiosis/forest_health.jpg';
import derekPhoto from '../assets/images/symbiosis/Derek.jpg';
import ericPhoto from '../assets/images/symbiosis/Eric.jpg';
import sarahPhoto from '../assets/images/symbiosis/Sarah.jpg';
import shaunPhoto from '../assets/images/symbiosis/Shaun.jpg';
import affinity from '../assets/images/symbiosis/affinity-diagram.jpg';
import mockup from '../assets/images/symbiosis/mockup.jpg';

function Symbiosis() {
    window.scrollTo(0, 0);
    return (
        <>
            <ProjectIntro image={symbiosisWide} name='Symbiosis' 
            description='I partnered with ForestHealthWatch and designed Symbiosis, an app that encourages younger adults to spend time outdoors and form connections with nature.'
            tools={['Miro', 'Figma']} roles={['User Research', 'UX Design', 'UI Design']}></ProjectIntro>
            <ProjectColumn heading='Context' text="In order to raise awareness for ecological issues such as western redcedar dieback, ForestHealthWatch came to us looking for inspiration on how to motivate people to care more about nature." image={forestHealth} caption='ForestHealthWatch leads many sustainability projects focusing on the Pacific Northwest.'></ProjectColumn>
            <ResearchQuestion text='How can we inspire more people to connect with nature and be invested in the health of their local ecosystem?'></ResearchQuestion>
            <ProjectColumn heading='User Research' text='We conducted semi-structured interviews to explore how people currently interact with nature and what motivates them to go outdoors. *Names and pictures are anonymized'></ProjectColumn>
            <Participants>
                <Participant image={derekPhoto} name='Derek' description='Derek loves to go outdoors when it is with his friends or family. He finds the outdoors refreshing and uses the opportunity to disconnect himself from technology.' quotes={["I love going on hikes or walking with friends."]}></Participant>
                <Participant image={ericPhoto} name='Eric' description='Eric aims to step outside at least once a day to refresh himself when he is feeling stressed. He finds nature to be meditative and restorative.' quotes={["I grew up a foot away from a national park... so nature is very important.", "Sometimes I feel obligated to take pictures. But I prefer to enjoy the scenery."]}></Participant>
                <Participant image={sarahPhoto} name='Sarah' description='Sarah likes to engage in some sort of structured activity when she goes outside. Recently, she likes to use the Nike running app to track her distance as she runs, which helps her feel accomplished.' quotes={["Running - people don't bother me. I don't have to talk to people.", "I use the Nike Run Club app - it gets me out more often because it gamifies it."]}></Participant>
                <Participant image={shaunPhoto} name='Shaun' description='Shaun is very active, going on morning runs every day to keep himself fit. He carries his Apple watch to track his distance and time.' quotes={["I don't have to think very much. I could just listen to music and go out any time I want.", "It's nature, so I feel like it's healing my body."]}></Participant>
            </Participants>
            <ProjectColumn heading='Affinity Mapping' text='As a group, we organized insights to form themes. We found that: ' unorderedList={['People were eager to disconnect from the "network"', 'People preferred having some structured activity to work through', 'Being with friends and family improved the outdoor experience']} image={affinity}></ProjectColumn>
            <ProjectColumn heading='Prototype' text='After iteratively developing and testing wireframes and low-fidelity prototypes, we came up with "Symbiosis," a game app that has daily quests and a reward system that motivates people to engage with it often.' image={mockup} caption='Symbiosis screens emphasize nature in every screen and is designed to be a gamified, but also educational app.' link='https://www.figma.com/file/S4DASjfR8Hk4nsQsXjv6Pc/Symbiosis?node-id=111%3A164'></ProjectColumn>
        </>
    );
}

export default Symbiosis;