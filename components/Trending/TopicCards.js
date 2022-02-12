import styled from "styled-components";


function TopicCards(props){
    let length=props.title.length;
    let desc=props.title;
    if(length>70)
    {   length=70; 
        desc=desc.slice(0,length)+"...";
    }

    return(
        <TrendingNewsContainer>
            <TrendingHeading><a href={props.link}>{desc}</a></TrendingHeading>            
        </TrendingNewsContainer>
    );

};

const TrendingHeading= styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
font-size:13.5px;
font-weight:600;
font-family:'Montserrat', sans-serif;
color:rgba(25, 90, 148);

`;
const TrendingNewsContainer=styled.div`
   background-color:white;
    padding:20px;
    border-radius:10px;
    margin:10px;
`;



export default TopicCards;