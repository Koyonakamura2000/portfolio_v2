import ProjectIntro from "../ProjectIntro.js";
import reflectionWide from '../assets/images/home/reflection_mockup_wide.jpg';
import ProjectColumn from "../ProjectColumn.js";
import ResearchQuestion from "../ResearchQuestion.js";
import Participants from "../Participants.js";
import kylePhoto from '../assets/images/reflection/kyle.png';
import paulPhoto from '../assets/images/reflection/paul.png';
import Participant from "../Participant.js";

function NightReflection() {
    window.scrollTo(0, 0);
    return (
        <>
            <ProjectIntro image={reflectionWide} name='Designing for Night-Time Reflection' 
            description='I researched and published "Designing for Night-Time Reflection," in which I conducted and analyzed interview and survey data to develop design techniques when supporting people reflecting at night.'
            tools={['Miro', 'Google Forms']} roles={['User Research']}></ProjectIntro>
            <ProjectColumn heading='Context' text="Engaging in reflection can raise self-awareness and allow oneself to navigate difficult situations. While research has been done on broad concepts surrounding how to design for reflection, little research has been done that focuses on principles for applying these concepts in specific contexts (e.g., night-time)."></ProjectColumn>
            <ResearchQuestion text='How can I help people engage in and act upon their night-time reflection?'></ResearchQuestion>
            <ProjectColumn heading='Approach' text='To tackle this overarching question, I sought answers to the following sub-questions:' 
            unorderedList={['How do people currently engage in night-time reflection?', 'What is the emotional experience of reflecting at night?', 
            "What are people's attitudes toward using technological interventions (e.g., smartphones) at night?"]}></ProjectColumn>
            <ProjectColumn heading='User Research' text='With the help of my teammates, I conducted semi-structured interviews and distributed an online survey to answer these questions.'></ProjectColumn>
            <Participants>
                <Participant image={paulPhoto} name='Paul' description='Paul engages himself with his phone or TV until he is exhausted, which helps him fall asleep immediately. He tries to avoid reflecting because thinking about things he has to do fills him with anxiety.' quotes={["...anxious about the future and I [don't] like thinking about past events.", "I'm normally consumed with one issue that I have."]}></Participant>
                <Participant image={kylePhoto} name='Kyle' description='Kyle typically reflects at night once out of every three nights, usually triggered by anxiety or recent academic shortcomings.' quotes={["It's always after I do poorly on a midterm, I don't do any of my homework, my reflection is like, 'how did I get here?' 'what led to this?' 'why do I keep making the same mistakes?'"]}></Participant>
            </Participants>
        </>
    );
}

export default NightReflection;