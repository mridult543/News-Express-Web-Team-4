import styled from "styled-components";
import TopicsList from "./TopicsList";

function HotTopics()
{
    return(
        <HotTopicContainer>
            <Heading>Hot Topics</Heading>
            <TopicContainer>
                <TopicsList/>
            </TopicContainer>
        </HotTopicContainer>
    )
}

const TopicContainer=styled.div`
    display: flex;
    
    justify-content: space-around;
    flex-direction:row;
    flex-wrap:wrap;
   
    padding-right:2.5%;
`;
const Heading=styled.h2`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    font-family:'Montserrat', sans-serif;
    font-weight:600;
    padding-left:60px;
`;
const HotTopicContainer=styled.div`
    display:flex;
    flex-direction:column;
    background-color:rgb(224, 240, 255);
    width:75%;
    border-radius:30px;
`;

export default HotTopics;