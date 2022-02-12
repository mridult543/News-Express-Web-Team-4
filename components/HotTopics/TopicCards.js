import styled from "styled-components";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TopicCards(props){
    let length=props.description.length;
    let desc=props.description;
    if(length>100)
    {   length=100;
        desc=desc.slice(0,length)+"...";
    }
    

    return(
        <CardContainer>
            <div style={{textAlign:"center",borderRadius:"10px"}}>
            <div style={{padding:"10px"}}><img src={props.image_src} alt="Topic Picture"   /></div>
            </div>
            <CardDetail>
                <TopicHeading>
                {props.title}
                </TopicHeading>
                <TopicDescriptoion>
                {desc}
                </TopicDescriptoion>
                <div>
                  <a href={props.link}>  <ReadmoreButton>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></ReadmoreButton></a></div>
                
            </CardDetail>
        </CardContainer>
    )
};


const CardContainer=styled.div`
    display: flex;
    flex-direction:column ;
    justify-content:center;
    width:25%;
    background-color:white;
    padding:20px;
    margin:45px;
    border-radius:20px;
`;
const CardDetail=styled.div`
    display: flex;
    flex-direction:column ;
`;
const TopicDescriptoion=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    font-family:'Montserrat', sans-serif;
    font-weight:500;
    font-size:14px;
    color:rgba(99,99,99,1);
`;
const TopicHeading=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
font-family:'Montserrat', sans-serif;
font-weight:600;
font-size:15px;
color:rgba(25, 90, 148);
padding-bottom:12px;
`;
const ReadmoreButton= styled.button`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
font-weight:600;
font-size:12px;
color:white;
background-color:rgba(25, 90, 148, 1);
border-radius:5px;
padding:12px;
margin-left:55%;
margin-top:7.5%;
border-style:none;
`;

export default TopicCards;