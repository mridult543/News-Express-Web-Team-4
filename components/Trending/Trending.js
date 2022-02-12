import styled from "styled-components";
import TopicsList from "./TopicList";

function Trending()
{
    return(
        <TrendingContainer>
            <h3>Trending</h3>
            <TopicsList/>
        </TrendingContainer>
    );
};

const TrendingContainer=styled.div`
width:25%;
background-color:rgb(224, 240, 255);
padding:2.5%;
margin:5px;
border-radius:30px;
`;


export default Trending;