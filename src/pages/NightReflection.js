import ProjectIntro from "../ProjectIntro.js";
import reflectionVeryWide from '../assets/images/home/reflection_mockup_verywide.jpg';
import ProjectColumn from "../ProjectColumn.js";
import ResearchQuestion from "../ResearchQuestion.js";
import Participants from "../Participants.js";
import kylePhoto from '../assets/images/reflection/kyle.png';
import paulPhoto from '../assets/images/reflection/paul.png';
import seanPhoto from '../assets/images/reflection/sean.png';
import toniPhoto from '../assets/images/reflection/toni.png';
import Participant from "../Participant.js";
import surveyAge from '../assets/images/reflection/survey_age.jpg';
import surveyEmotion from '../assets/images/reflection/survey_emotion.jpg';
import surveyFrequency from '../assets/images/reflection/survey_frequency.jpg';
import surveySleep from '../assets/images/reflection/survey_sleep.jpg';
import ProjectGrid from '../ProjectGrid.js';
import ProjectNavigation from "../ProjectNavigation.js";

function NightReflection() {
    window.scrollTo(0, 0);
    return (
        <>
            <ProjectNavigation links={{'Context': 'context', 'Research Question': 'researchQuestion', 'Interviews': 'interviews', 'Survey': 'survey', 'Findings': 'findings', 'Design Recommendations': 'designRecommendations', 'Impact': 'impact'}}></ProjectNavigation>
            <ProjectIntro image={reflectionVeryWide} duration='March 2021 - October 2021' name='Designing for Night-Time Reflection' 
            description='I researched and published "Designing for Night-Time Reflection," in which I conducted and analyzed interview and survey data to develop design techniques when supporting people reflecting at night.'
            tools={['Miro', 'Google Forms']} roles={['User Research']}></ProjectIntro>
            <ProjectColumn id='context' heading='Context' text="Engaging in reflection can raise self-awareness and allow oneself to navigate difficult situations. While research has been done on broad concepts surrounding how to design for reflection, little research has been done that focuses on principles for applying these concepts in specific contexts (e.g., night-time)."></ProjectColumn>
            <ResearchQuestion id='researchQuestion' color='black' text='How can I help people engage in and act upon their night-time reflection?'></ResearchQuestion>
            <ProjectColumn heading='Approach' text='To tackle this overarching question, I sought answers to the following sub-questions:' 
            unorderedList={['How do people currently engage in night-time reflection?', 'What is the emotional experience of reflecting at night?', 
            "What are people's attitudes toward using technological interventions (e.g., smartphones) at night?"]}></ProjectColumn>
            <ProjectColumn id='interviews' heading='User Research: Interviews' text='I developed a semi-structured interview protocol to answer the questions above. With the help of my teammates, I recruited four interview participants who had varying degrees of engagement with reflection. *Names and photos are anonymized'></ProjectColumn>
            <Participants>
                <Participant image={paulPhoto} name='Paul' description='Paul engages himself with his phone or TV until he is exhausted, which helps him fall asleep immediately. He tries to avoid reflecting because thinking about things he has to do fills him with anxiety.' quotes={["...anxious about the future and I [don't] like thinking about past events.", "I'm normally consumed with one issue that I have."]}></Participant>
                <Participant image={kylePhoto} name='Kyle' description='Kyle typically reflects at night once out of every three nights, usually triggered by anxiety or recent academic shortcomings.' quotes={["It's always after I do poorly on a midterm, I don't do any of my homework, my reflection is like, 'how did I get here?' 'what led to this?' 'why do I keep making the same mistakes?'"]}></Participant>
                <Participant image={seanPhoto} name='Sean' description='Sean interacts with a lot of technology as he prepares to sleep, such as his phone and Amazon Alexa. He finds himself reflecting more when something upsetting recently happened.' quotes={["If there's something sad that happened... I try to reflect a bit more.", "If I don't reflect and I don't think about anything, it's easy for me to fall asleep."]}></Participant>
                <Participant image={toniPhoto} name='Toni' description='Toni engages in night-time reflection every day. If he is tired, he would spend between 15 to 30 minutes before falling asleep, but if not, he might spend as much as an hour reflecting. To prepare himself for sleep, he listens to guided meditation on his phone.' quotes={["I don't stress when I'm reflecting.", "I don't like it when [reflection] is too long."]}></Participant>
            </Participants>
            <ProjectColumn id='survey' heading='Survey' text='I designed a survey on Google Forms and distributed it mainly through the University of Washington subreddit, asking questions pertaining to how the wider population experiences night-time reflection.'></ProjectColumn>
            <ProjectGrid items={[{'image': surveyAge, 'caption': 'Participants ranged from 12 to 60 years old, with the peak being 19 and 20 years old.'}, {'image': surveyFrequency, 'caption': 'The frequency of engaging in night-time reflection varied greatly, with some participants reflecting every day while others rarely reflected.'}, {'image': surveyEmotion, 'caption': '(1 = Strongly Disagree) 29/44 participants found engaging in night-time reflection to be a negative experience.'}, {'image': surveySleep, 'caption': '29/43 participants found that engaging in reflection keeps them awake longer.'}]}></ProjectGrid>
            <ProjectColumn id='findings' heading='Findings' labeledList={[{'heading': 'Varying attitudes toward technology use in bed', 'text': 'Many participants (28/43) felt that the use of technology before bed reduces their quality of sleep, yet some relied on their mobile phones to record thoughts from reflection. Most participants found that looking at bright screens distracted from their efforts to go to sleep.'}, {'heading': 'Difficulty in acting upon reflection takeaways', 'text': 'Some participants felt frustrated when they failed to act upon their reflection takeaways.'}, {'heading': 'Long reflection hinders efforts to sleep', 'text': 'Spending a long time reflecting reduced participants’ quality of sleep. When they fell asleep quickly, participants mentioned feeling happier and more relaxed in the following day. The possibility of spending an excessive time reflecting influenced participants to prefer avoiding reflection.'}, {'heading': 'Triggers of night-time reflection', 'text': 'Night-time reflective behavior was triggered by a number of factors. Physical and mental fatigue, as well as a dark and quiet environment allowed participants to fall asleep quickly.'}]}></ProjectColumn>
            <ProjectColumn id='designRecommendations' heading='Design Recommendations' text='Based on the findings, I developed a list of design recommendations to consider when designing to support night-time reflection.' labeledList={[{'heading': "Stray from screen-based interactions", 'text': "We stress the importance of non-screen designs as viewing smartphone screens proved to be detrimental to many participants' quality of sleep."}, {'heading': 'Support users in acting upon reflection takeaways', 'text': 'Designs can support users in taking action by recording thoughts and reminding users of self-set goals.'}, {'heading': 'Consider the negative emotions that might come up in night-time reflection', 'text': 'Before designing, consider whether the design is necessary - is it ethical to urge people to reflect if it often causes negative emotions?'}]}></ProjectColumn>
            <ProjectColumn id='impact' heading='Impact' text='My research expands on the field of reflection design by detailing specific aspects to consider when designing a reflection-related intervention for the night-time context. I submitted my research to the SIGDOC Student Research Competition and it was accepted for publication at the 2021 SIGDOC conference!' link={['https://dl.acm.org/doi/10.1145/3472714.3475820', 'View Publication']}></ProjectColumn>
        </>
    );
}

export default NightReflection;